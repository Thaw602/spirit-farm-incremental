export type TickCallback = (delta: number) => void;

export class TickManager {
  private callbacks: TickCallback[] = [];
  private lastTime = 0;
  private running = false;

  add(cb: TickCallback) { this.callbacks.push(cb); }
  remove(cb: TickCallback) {
    this.callbacks = this.callbacks.filter(c => c !== cb);
  }

  start() {
    this.running = true;
    this.lastTime = Date.now();
    this.loop();
  }

  private loop() {
    if (!this.running) return;
    const now = Date.now();
    const delta = (now - this.lastTime) / 1000;
    this.lastTime = now;
    for (const cb of this.callbacks) cb(delta);
    requestAnimationFrame(() => this.loop());
  }
}
