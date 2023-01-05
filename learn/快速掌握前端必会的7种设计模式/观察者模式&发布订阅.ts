type Fn = () => void;
const cbExec = (cb: Fn) => {
  cb();
};

cbExec(() => {
  console.log("hello world");
});

class EventBus {
  private readonly events: Record<string, Array<Fn>>;

  constructor() {
    this.events = {};
  }

  public on(eventName: string, cb: Fn) {
    this.events[eventName] = this.events[eventName] || [];
    this.events[eventName].push(cb);
  }

  public emit(eventName: string) {
    this.events[eventName].forEach((cb) => cb());
  }
}

const eventBus = new EventBus();

eventBus.on("init", () => {
  console.log("init1");
});

eventBus.on("init", () => {
  console.log("init2");
});

eventBus.emit("init");

export default {};
