class Document {
    constructor() {
        this.id = null;
        this.data = {};
        this.keys = ['%tags'];
        this.teams = [];
        this.contributors = [];
    }

    addTeam(team) {
        this.teams.push(team);
        this.data[team] = {};
        // add existing keys
        for (let key of this.keys) {
            this.data[team][key] = null;
        }
    }

    removeTeam(team) {
        for(let t in this.teams) {
            if(t == team) {
                this.teams.splice(t, 1);
                delete this.data[team];
                return true;
            }
        }
    }

    addKey(key) {
        this.keys.push(key);
        // update team data
        for (let team in this.data) {
            this.data[team][key] = null;
        }
    }

    removeKey(key) {
        for(let k in this.keys) {
            if(k == key) {
                this.keys.splice(k, 1);
                // update team data
                for (let team in this.data) {
                    delete this.data[team][key];
                }
                return true;
            }
        }
    }

    set(team, key, val) {
        for(let t of this.teams) {
            if(t == team) {
                this.data[team][key] = val;
                return true;
            }
        }
    }

    get(team, key) {
        for(let t of this.teams) {
            if(t == team) {
                return this.data[team][key];
            }
        }
    }

    dat(format) {
        if(format == 'csv') {
            let csv = '';
            for (let team in this.data) {
                csv += team;
                for (let key in this.data[team]) {
                    csv += ',' + this.data[team][key];
                }
                csv += '\n';
            }
            return csv;
        } else if (format == 'json') {
            return JSON.stringify(this.data);
        }
    }

    // Get the average value of a key
    average(key) {
        let sum = 0;
        let count = 0;
        for (let team in this.data) {
            if (this.data[team][key]) {
                sum += parseFloat(data[team][key]);
                count++;
            }
        }
        return sum / count;
    }

    // Returns a document with the CSV data
    static importFromCSV(csv) {
        let d = new Document();
        let lines = csv.split('\n');
        for(let line of lines) {
            let parts = line.split(',');
            if(parts.length > 1) {
                let team = parts[0];
                d.addTeam(team);
                for(let i = 1; i < parts.length; i++) {
                    let key = d.keys[i-1];
                    d.addKey(key);
                    let val = parts[i];
                    d.set(team, key, val);
                }
            }
        }
        return d;
    }
}