// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/core';
import {inject} from '@loopback/core';
import {get, param, Request, RestBindings} from '@loopback/rest';

export class HelloController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request) {}

  @get('/hello')
  hello(): string {
    return 'Hello world!';
  }

  @get('/hello/loopback')
  hellloopback(): object {
    return {
      greeting: 'Hello from LoopBack',
      date: new Date(),
      url: this.req.url,
      headers: Object.assign({}, this.req.headers),
    };
  }

  @get('/hello/user/{id}', {
    responses: {
      '200': {
        description: 'hello user',
        content: {
          'application/json': {},
        },
      },
    },
  })
  hellouser(@param.path.number('id') id: string): object {
    return {
      greeting: 'Hello from LoopBack, ' + id,
      date: new Date(),
      url: this.req.url,
      headers: Object.assign({}, this.req.headers),
    };
  }
}
