exports.gettingStartedOOP = () => {
    // Exercise- Stop Watch
    function Stopwatch() {
        let startTime = "";
        let endTime = "";
        let running = false;
        let duration = 0;

        this.start = () => {
            if (running) throw new Error("Stopwatch has already startd");
            running = true;
            startTime = new Date();
        };
        this.stop = () => {
            if (!running) throw new Error("Stopwatch is not started.");
            running = false;
            endTime = new Date();
            const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
            duration += seconds;
        };
        this.reset = () => {
            startTime = null;
            endTime = null;
            running = false;
            duration = 0;
        };

        Object.defineProperties(this, "duration", {
            // eslint-disable-next-line no-restricted-syntax
            get() {
                return duration;
            },
        });
    }

    const stopWatch = new Stopwatch();
    // stopWatch.duration;
    stopWatch.start();
};

exports.prototypes = () => {
    /*
    function Circle(radius) {
        this.radius = radius;
        this.draw = () => {
            console.log("draw");
        };
    }

    const circle = new Circle(10);
    console.log(circle.radius);
    console.log(circle.draw());

    // Step 2
    const person = {
        name: "Mosh",
    };
    // const objectBase = Object.getPrototypeOf(person);
    // const descriptor = Object.getOwnPropertyDescriptor(objectBase, "toString");
    // console.log(descriptor);

    Object.defineProperty(person, "name", {
        writable: true, // Value will be editable if true
        enumerable: true,
        configurable: false,
    });
    person.name = "Wakidur";
    delete person.name;
    console.log(person);

    // Step 3

    function CircleProtoVsInstance(radius) {
        // Instance members
        this.radius = radius;
        this.move = () => {
            this.draw();
            console.log("Move");
        };
    }
    // Prototype members
    CircleProtoVsInstance.prototype.draw = () => {
        console.log("Draw");
    };

    const c1 = new CircleProtoVsInstance(1);

    console.log(c1.move());

    // Returns instance members
    console.log(Object.keys(c1));

    // Returns all members (instance + prototype )
    for (let key in c1) console.log(" Instance and Key ", key);

    for (const key in c1) {
        if (Object.prototype.hasOwnProperty.call(c1, key)) {
            const element = c1[key];
            console.log("Wrap", element);
        }
    }
*/
    this.prototypicalInheritance();
};

exports.prototypicalInheritance = () => {
    // Intermidate function inheritance
    function extend(Child, Parent) {
        // User.prototype.constructor = Circle
        // New Circle.prototype.constructor() = new Circle();
        Child.prototype = Object.create(Parent.prototype); // User base
        Child.prototype.constructor = Child;

    }

    // Creating Your Own Prototypical Inheritance.
    function Shape(color) {
        // write some code
        this.color = color;
    }
    Shape.prototype.duplicate = () => {
        console.log("Dublicate");
    };

    function Circle(radius, color) {
        Shape.call(this, color);
        this.radius = radius;
    }

    extend(Circle, Shape);

    Circle.prototype.draw = () => {
        console.log("Draw");
    };

    function Square(size) {
        this.size = size;
    }
 
    extend(Square, Shape);

    const s = new Shape();
    const c = new Circle(1, "red");
    const sq = new Square(10);

    // Own Prototypical Inheritance
    function User() {}

    User.prototype.fullName = () => {
        console.log("Full Name");
    };

    function Teacher(name) {
        this.name = name;
    }

    Teacher.prototype.joinDate = () => {
        console.log("Teacher");
    };

    // Teacher.prototype = Object.create(Object.prototype); // Object Base

    // User.prototype.constructor = Circle
    // New Circle.prototype.constructor() = new Circle();
    Teacher.prototype = Object.create(User.prototype); // User base
    Teacher.prototype.constructor = Teacher;

    const u = new User();
    const t = new Teacher("Wakidur");
}