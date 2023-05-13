class Scanner {
    constructor(inp) {
        this.inp = inp;
    }

    nextLine() {
        let next = this.inp.indexOf("\n");
        let temp = this.inp.slice(0, next).trim();
        this.inp = this.inp.slice(next+1);

        if (temp == "\n" || !temp.length) return this.nextLine();

        return temp;
    }

    nextLines(num) {
        let lines = [];
        for (let i = 0; i < num; ++i) {
            lines.push(this.nextLine());
        }

        return lines;
    }

    hasNextLine() {
        let newlines = this.inp.indexOf("\n") != -1;

        if (newlines) return true;
        if (this.inp.length) return true;
        return false;
    }
}

module.exports = Scanner;