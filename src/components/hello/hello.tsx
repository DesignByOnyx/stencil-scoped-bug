import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'rjs-hello',
  styleUrl: 'hello.css',
  scoped: true
})
export class RjsHello {
  render() {
    return (
      <Host>
        <p>
          Hello <slot /> - this should have a red background.
        </p>
      </Host>
    );
  }
}
