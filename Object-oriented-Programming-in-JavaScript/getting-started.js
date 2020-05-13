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
            get() {
                return duration;
            },
        });
    }

    const stopWatch = new Stopwatch();
    // stopWatch.duration;
    stopWatch.start();
    stopWatch.duration;
};

exports.prototypes = () => {};