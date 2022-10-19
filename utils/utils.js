export default class Utils {
    static checkContext() {
        if (!this.context) {
            this.context = {};
        }
    }
    static setValue(key, value) {
        this.checkContext();
        this.context[key] = value;
    }

    static getValue(key) {
        this.checkContext();
        return this.context[key];
    }

    static deleteValue(key) {
        this.checkContext();
        delete this.context[key];
    }

    static set userId(val) {
        console.log('set userid: ', val);
        if (val) {
            this.setValue('user_id', val);
        } else {
            this.deleteValue('user_id');
        }
    }
    static get userId() {
        return this.getValue('user_id');
    }

    static set questionId(val) {
        if (val) {
            this.setValue('question_id', val);
        } else {
            this.deleteValue('question_id');
        }
    }
    static get questionId() {
        return this.getValue('question_id');
    }
    static set currentQuestion(val) {
        if (val) {
            this.setValue('currentQuestion', val);
        } else {
            this.deleteValue('currentQuestion');
        }
    }
    static get currentQuestion() {
        return this.getValue('currentQuestion');
    }
}
