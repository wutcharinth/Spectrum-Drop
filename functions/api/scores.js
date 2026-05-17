const MAX_ENTRIES = 10;
const MAX_NAME_LEN = 12;
const MAX_SCORE = 10_000_000;
const KV_KEY = 'top10';

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function onRequestOptions() {
  return jsonResponse({ ok: true });
}

export async function onRequestGet({ env }) {
  const raw = await env.SCORES.get(KV_KEY);
  const scores = raw ? JSON.parse(raw) : [];
  return jsonResponse(scores);
}

export async function onRequestPost({ request, env }) {
  let body;
  try { body = await request.json(); }
  catch { return jsonResponse({ error: 'invalid json' }, 400); }

  let name = String(body.name || '').trim().slice(0, MAX_NAME_LEN);
  name = name.replace(/[^\p{L}\p{N}\s\-_]/gu, '').trim();
  const score = Math.floor(Number(body.score) || 0);

  if (!name || score < 1 || score > MAX_SCORE) {
    return jsonResponse({ error: 'invalid name or score' }, 400);
  }

  const raw = await env.SCORES.get(KV_KEY);
  let scores = raw ? JSON.parse(raw) : [];
  scores.push({ name, score, ts: Date.now() });
  scores.sort((a, b) => b.score - a.score);
  scores = scores.slice(0, MAX_ENTRIES);
  await env.SCORES.put(KV_KEY, JSON.stringify(scores));

  return jsonResponse(scores);
}
