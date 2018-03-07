class SmartCalculator {

    constructor(value) {
        this.queue = [];
        this.queue.push("add", value);
    }
    add(value) {
        this.queue.push("add", value);
        return this;
    }
    subtract(value) {
        this.queue.push("subtract", value);
        return this;
    }
    multiply(value) {
        this.queue.push("multiply", value);
        return this;
    }
    devide(value) {
        this.queue.push("divide", value);
        return this;
    }
    pow(value) {
        this.queue.push("pow", value);
        return this;
    }
    valueOf() {

        var result = 0;
        var prevoiusAction = 0;
        var currentAction = 0;
        var currentValue = 0;
        var nextAction = 0;
        var nextValue = 0;

        //     console.log("queue1 = " + this.queue);

        for (var i = this.queue.length - 1; i >= 0; i--) {
            if ("pow".localeCompare(this.queue[i]) == 0) {
                this.queue[i - 1] = Math.pow(this.queue[i - 1], this.queue[i + 1]);
                this.queue[i + 1] = "a";
                this.queue[i] = "a";
            }
        }
        //     console.log("queue2 = " + this.queue);


        currentAction = this.queue.shift();
        currentValue = this.queue.shift();
        prevoiusAction = currentAction;

        //     console.log("currentAction = " + currentAction);
        //     console.log("currentValue = " + currentValue);
        //     console.log("--------------------------");

        do {
            nextAction = this.queue.shift();
            nextValue = this.queue.shift();

            if ("add".localeCompare(nextAction) == 0 ||
                "subtract".localeCompare(nextAction) == 0) {

                if ("add".localeCompare(currentAction) == 0) {
                    result += currentValue;
                }
                if ("subtract".localeCompare(currentAction) == 0) {
                    result -= currentValue;
                }

                prevoiusAction = nextAction;
                currentAction = nextAction;
                currentValue = nextValue;

                //         console.log("result = " + result);
                //         console.log("nextAction = " + nextAction);
                //         console.log("nextValue = " + nextValue);
                //         console.log("queue = " + this.queue);
                //         console.log("--------------------------");
                //         console.log("prevoiusAction = " + prevoiusAction);
                //         console.log("currentAction = " + currentAction);
                //         console.log("currentValue = " + currentValue);

            } else {
                if ("multiply".localeCompare(nextAction) == 0) {
                    currentValue = currentValue * nextValue;
                }
                if ("divide".localeCompare(nextAction) == 0) {
                    currentValue = currentValue / nextValue;
                }
                if (this.queue.length > 0) {
                    currentAction = prevoiusAction;
                }

            }

            //       console.log("NO result here");
            //       console.log("nextAction = " + nextAction);
            //       console.log("nextValue = " + nextValue);
            //       console.log("queue = " + this.queue);
            //       console.log("--------------------------");
            //       console.log("currentAction = " + currentAction);
            //       console.log("currentValue = " + currentValue);


            if (this.queue.length == 0) {
                if ("add".localeCompare(currentAction) == 0) {
                    result += currentValue;
                }
                if ("subtract".localeCompare(currentAction) == 0) {
                    result -= currentValue;
                }
                break;
            }
        } while (true);
        return result;
    }
}
// console.log("FINAL result = " + value);


module.exports = SmartCalculator;