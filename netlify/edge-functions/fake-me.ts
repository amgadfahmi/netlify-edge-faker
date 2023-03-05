import * as faker from 'https://cdn.skypack.dev/@faker-js/faker@v7.4.0?dts';
import lodash from 'https://cdn.skypack.dev/lodash';
import type { Context } from 'https://edge.netlify.com';

export default async (
  request: Request,
  context: Context
): Promise<Response> => {
  if (request.method !== 'POST')
    return await new Response(
      JSON.stringify({ error: 'Only POST method allowed.' }),
      {
        status: 400,
        headers: {
          'content-type': 'application/json; charset=utf-8',
        },
      }
    );
  let repeat = 1;

  const url = new URL(request.url);
  if (url.searchParams.has('repeat')) {
    const repeatParam = url.searchParams.get('repeat') ?? '';
    repeat = !isNaN(+repeatParam) ? Number(repeatParam) : 1;
    if (repeat > 100)
      return await new Response(
        JSON.stringify({
          warning: 'Slow down cowboy, this is a bit too much.',
        }),
        {
          status: 400,
          headers: {
            'content-type': 'application/json; charset=utf-8',
          },
        }
      );
  }

  console.log('headers', request.headers);

  const result: Record<string, string>[] = [];

  if (request.body) {
    const body = await request.json();
    for (let i = 0; i < repeat; i++) {
      result.push(createRecord(body));
    }
  }

  return await new Response(JSON.stringify(result), {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  });
};

function createRecord(body: any) {
  const result: Record<string, string> = {};

  for (const parent in body) {
    const namespace = parent.toString();
    for (const child in body[parent]) {
      const param = body[parent][child];
      result[child] = faker.faker[namespace][child](param);
    }
  }
  return result;
}
