import rs from 'readline-sync';

export default abstract class Messages {      

    public static setDefaultColor(): void {
        console.log('\x1b[0m');    
    }

    public static setTitleColor(): void {
        console.log('\x1b[34m');    
    }

    public static setListColor(): void {
        console.log('\x1b[35m');    
    }

    public static setQuestionColor(): void {
        console.log('\x1b[33m');    
    }

    public static setAnswerColor(): void {
        console.log('\x1b[32m');    
    }

    public static setErrorColor(): void {
        console.log('\x1b[31m');    
    }

    public static whatToDo() {
        this.setTitleColor();
        console.log('What to do?');

        this.setListColor();
        console.log('1. Mnemonic.');
        console.log('2. Check peer.');

        this.setQuestionColor();
        return rs.question('Specify but provide a number: ');
    } 

    public static mnemonicLib() {
        this.setTitleColor();
        console.log('Mnemonic');

        this.setListColor();
        console.log('1. Generate keys.');
        console.log('2. Get phrase.');

        this.setQuestionColor();
        return rs.question('Specify but provide a number: ');
    } 

    public static getPhrase() {
        this.setQuestionColor();
        return rs.question('Input phrase: ');
    } 

    public static getChain() {
        this.setQuestionColor();
        return rs.question('Input chain(DUC, BTC...): ');
    } 

    public static choiceChain(modules: { name: string, peer?: any, web3?: boolean }[]) {
        this.setTitleColor();
        console.log('Choice blockchain');

        this.setListColor();
        modules.forEach((module, index) => {
            const string = `${index + 1}. ${module.name}`;
            console.log(string);
        });

        this.setQuestionColor();
        return rs.question('Specify but provide a number: ');
    }

    public static getHost() {
        this.setQuestionColor();
        return rs.question('Input host: ');
    }

    public static getPort() {
        this.setQuestionColor();
        return rs.question('Input port: ');
    }

    public static getNetwork() {
        this.setQuestionColor();
        return rs.question('Input network: ');
    }

    public static answer(text: string) {
        this.setAnswerColor();
        console.log(text);
    }

    public static error(text: string) {
        this.setErrorColor();
        console.log(text);
    }
}