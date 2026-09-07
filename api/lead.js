export default async function handler(req, res) {
  // CORS Configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, phone, city, situation, message, tracking } = req.body || {};

    if (!name || !phone) {
      return res.status(400).json({ error: 'Nome e WhatsApp são obrigatórios.' });
    }

    // Format phone to international E.164 format (+55...)
    const digitsOnly = String(phone).replace(/\D/g, '');
    const formattedPhone = digitsOnly.startsWith('55')
      ? `+${digitsOnly}`
      : `+55${digitsOnly}`;

    const token = process.env.KOMMO_ACCESS_TOKEN ||
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImMyNTI5NGFmM2FmM2Y0MDExYzc1MWU3YzI5M2NhMjFiYzU1YzM2ZjM5Yzg0MDI4MjMzNmNmZTAwNTIwMzllNzAyYzJiZTcwNmJlNTIwMWQyIn0.eyJhdWQiOiIzNWNlZmY2Yi1hMjRiLTQwODAtYTg3Yi1lY2M0NzA0ZTQ1OTciLCJqdGkiOiJjMjUyOTRhZjNhZjNmNDAxMWM3NTFlN2MyOTNjYTIxYmM1NWMzNmYzOWM4NDAyODIzMzZjZmUwMDUyMDM5ZTcwMmMyYmU3MDZiZTUyMDFkMiIsImlhdCI6MTc4ODY0MDMyNCwibmJmIjoxNzg4NjQwMzI0LCJleHAiOjE3OTg3NjE2MDAsInN1YiI6IjE0NzM4MzExIiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjM2OTE2ODM1LCJiYXNlX2RvbWFpbiI6ImtvbW1vLmNvbSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJwdXNoX25vdGlmaWNhdGlvbnMiLCJmaWxlcyIsImNybSIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiMTYxY2FjZDYtNzA2Yy00ZWIzLTkwNjEtMjYxN2UyZGNkZWMwIiwiYXBpX2RvbWFpbiI6ImFwaS1jLmtvbW1vLmNvbSJ9.LH1CGqDsX5Dwukn56Fu-2u3ReYYsmpelUgw_SuYA8I6zeiipalP8EfDnrEW2XowGg5ab3VIS1gXs6LHtee29H7ei9A9fzEKPXqamB4dyO_bF-Gq9ScMh-hk_MKFzu86kNJzwl9ZtgSZ4pq4DW0FySSGwMWU0KXWLTJ49R_v30qs2awn_NmXLuCRb-GvDj5nmsscPRl3XWnqxLJ-KAHu0hT6RqGQjzsunyHG--ooa5jDTZVgIFKeLW-geEdGczen5gN00tpoOiJQtW8yjYof_csn8oQIu4ceunWsqbsSqGw4nWMQRUTHsE12K0gFiUoexS5KKnuDjNow4zoAxeV8SDw";

    const subdomain = process.env.KOMMO_SUBDOMAIN || "marcellaigrejasocial";
    const pipelineId = 14384319;

    const customFields = [];

    // 1. Native Statistical Fields in Kommo
    if (tracking?.utm_source) customFields.push({ field_id: 400350, values: [{ value: tracking.utm_source }] });
    if (tracking?.utm_medium) customFields.push({ field_id: 400346, values: [{ value: tracking.utm_medium }] });
    if (tracking?.utm_campaign) customFields.push({ field_id: 400348, values: [{ value: tracking.utm_campaign }] });
    if (tracking?.utm_term) customFields.push({ field_id: 400352, values: [{ value: tracking.utm_term }] });
    if (tracking?.utm_content) customFields.push({ field_id: 400344, values: [{ value: tracking.utm_content }] });
    if (tracking?.gclid) customFields.push({ field_id: 400360, values: [{ value: tracking.utm_gclid || tracking.gclid }] });
    if (tracking?.fbclid) customFields.push({ field_id: 400362, values: [{ value: tracking.fbclid }] });
    if (tracking?.referrer) customFields.push({ field_id: 400356, values: [{ value: tracking.referrer }] });

    // 2. Visible Custom Fields on Lead
    customFields.push({ field_id: 519266, values: [{ value: tracking?.utm_source || 'Direto/Orgânico' }] });
    customFields.push({ field_id: 519268, values: [{ value: tracking?.utm_medium || 'N/A' }] });
    customFields.push({ field_id: 519270, values: [{ value: tracking?.utm_campaign || 'N/A' }] });
    customFields.push({ field_id: 519272, values: [{ value: tracking?.utm_term || 'N/A' }] });
    customFields.push({ field_id: 519274, values: [{ value: tracking?.utm_content || 'N/A' }] });
    if (tracking?.gclid) customFields.push({ field_id: 400360, values: [{ value: tracking.gclid }] });
    if (tracking?.fbclid) customFields.push({ field_id: 400362, values: [{ value: tracking.fbclid }] });
    customFields.push({ field_id: 519276, values: [{ value: tracking?.referrer || 'N/A' }] });
    customFields.push({ field_id: 519260, values: [{ value: tracking?.campaign_url || 'Landing Page Trabalhista' }] });

    // 3. Lead Specifics
    customFields.push({ field_id: 498274, values: [{ value: "Landing Page Trabalhista" }] });
    if (situation) {
      customFields.push({ field_id: 498270, values: [{ value: situation }] });
    }

    const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || '127.0.0.1';

    const kommoPayload = [
      {
        source_name: "Landing Page Trabalhista",
        source_uid: `lp-trab-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        pipeline_id: pipelineId,
        created_at: Math.floor(Date.now() / 1000),
        _embedded: {
          leads: [
            {
              name: `Trabalhista - ${name}`,
              custom_fields_values: customFields
            }
          ],
          contacts: [
            {
              first_name: name,
              custom_fields_values: [
                {
                  field_code: "PHONE",
                  values: [{ value: formattedPhone, enum_code: "WORK" }]
                }
              ]
            }
          ]
        },
        metadata: {
          form_id: 2,
          form_name: "Formulário Trabalhista",
          form_page: tracking?.campaign_url || "Landing Page Trabalhista",
          form_sent_at: Math.floor(Date.now() / 1000),
          ip: typeof clientIp === 'string' ? clientIp.split(',')[0].trim() : '127.0.0.1'
        }
      }
    ];

    const createRes = await fetch(`https://${subdomain}.kommo.com/api/v4/leads/unsorted/forms`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(kommoPayload)
    });

    const createData = await createRes.json();
    const leadId = createData?._embedded?.unsorted?.[0]?._embedded?.leads?.[0]?.id;

    // Attach Note with full situation, city, message and contact info
    if (leadId) {
      try {
        const noteText = [
          `📋 NOVO CONTATO - LANDING PAGE TRABALHISTA`,
          `👤 Nome: ${name}`,
          `📱 WhatsApp: ${formattedPhone}`,
          `🏙️ Cidade: ${city || 'Não informada'}`,
          `⚖️ Situação: ${situation || 'Não especificada'}`,
          `💬 Relato do Caso:`,
          `${message || 'Nenhum relato adicional enviado.'}`,
          ``,
          `🌐 Informações de Rastreamento (UTM):`,
          `• Origem (utm_source): ${tracking?.utm_source || 'Direto/Orgânico'}`,
          `• Mídia (utm_medium): ${tracking?.utm_medium || 'N/A'}`,
          `• Campanha (utm_campaign): ${tracking?.utm_campaign || 'N/A'}`,
          `• Palavra-chave (utm_term): ${tracking?.utm_term || 'N/A'}`,
          `• Anúncio (utm_content): ${tracking?.utm_content || 'N/A'}`,
          `• GCLID: ${tracking?.gclid || 'N/A'}`,
          `• FBCLID: ${tracking?.fbclid || 'N/A'}`,
          `• Link da Campanha: ${tracking?.campaign_url || 'Landing Page Trabalhista'}`
        ].join('\n');

        await fetch(`https://${subdomain}.kommo.com/api/v4/leads/${leadId}/notes`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify([
            {
              note_type: "common",
              params: {
                text: noteText
              }
            }
          ])
        });
      } catch (noteErr) {
        console.error("Erro ao adicionar nota ao lead:", noteErr);
      }
    }

    return res.status(200).json({
      success: true,
      lead_id: leadId || null,
      formatted_phone: formattedPhone,
      message: "Lead trabalhista registrado com sucesso no Kommo!"
    });
  } catch (error) {
    console.error("Erro na API /api/lead:", error);
    return res.status(500).json({ error: "Erro interno ao processar lead." });
  }
}
