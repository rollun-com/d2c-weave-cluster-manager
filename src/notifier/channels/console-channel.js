export class ConsoleChannel {
  async write(level, title, payload) {
    let body = `
-----------------------
${new Date().toISOString()}
[${level}]: ${title}`;

    if (payload) {
      body += '\n' + (typeof payload === 'object' ? JSON.stringify(payload, null, 1) : payload);
    }

    body += '\n-----------------------';

    console.log(body);
  }
}
