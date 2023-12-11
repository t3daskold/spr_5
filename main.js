class Computer {
    constructor(builder) {
        this.cpu = builder.cpu;
        this.ram = builder.ram;
        this.storage = builder.storage;
        this.gpu = builder.gpu;
    }
}

class ComputerBuilder {
    constructor() {
        this.computer = new Computer({});
    }

    buildCPU(cpu) {
        this.computer.cpu = cpu;
        return this;
    }

    buildRAM(ram) {
        this.computer.ram = ram;
        return this;
    }

    buildStorage(storage) {
        this.computer.storage = storage;
        return this;
    }

    buildGPU(gpu) {
        this.computer.gpu = gpu;
        return this;
    }

    getResult() {
        return this.computer;
    }
}

// Usage
const gamingComputer = new ComputerBuilder()
    .buildCPU("High-end CPU")
    .buildRAM("16GB RAM")
    .buildStorage("1TB SSD")
    .buildGPU("Dedicated GPU")
    .getResult();

console.log(gamingComputer);
