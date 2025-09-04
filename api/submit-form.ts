import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const scriptId = 'AKfycbzKdGwefhjztwS0w7mBjtIWEjZs-7QCWljklIUmsSC26YoqAID2ABx3ttK6HwaYtZmi';
  const scriptUrl = `https://script.google.com/macros/s/${scriptId}/exec`;

  try {
    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(500).json({ message: 'Erro ao enviar para Google Sheets', detail: text });
    }

    return res.status(200).json({ message: 'Formulário enviado com sucesso!' });
  } catch (error) {
    console.error('Erro na função serverless:', error);
    return res.status(500).json({ message: 'Erro interno do servidor', error });
  }
}
