'use strict';

new Vue({
    el: '#app',
    data: {
        healthPlayer: 100,
        healthMonster: 100,
        gameOver: false,
        attackPlayer: 20,
        attackMonster: 8,
        specialAttackPlayer: 25,
        healPlayer: 20,
        fightLog: []
    },
    computed: {
        styleHealthBarPlayer: function () {
            return {
                width: this.healthPlayer + '%'
            };
        },
        styleHealthBarMonster: function () {
            return {
                width: this.healthMonster + '%'
            };
        }
    },
    methods: {
        attack: function () {
            var hit = this.returnRounded(this.attackPlayer);
            if (this.healthMonster > 0 && this.healthMonster <= 100) {
                this.healthMonster = this.healthMonster - hit;
                this.fightLog.push('PLAYER HITS MONSTER BY ' + hit);
            } else {
                this.healthMonster = 0;
                this.gameOver = true;
            }
            this.updateGame();
        },
        specialAttack: function () {
            var hit = this.returnRounded(this.specialAttackPlayer);
            if (this.healthMonster > 0 && this.healthMonster <= 100) {
                this.healthMonster = this.healthMonster - hit;
                this.fightLog.push('PLAYER HITS MONSTER BY ' + hit);
            } else {
                this.healthMonster = 0;
                this.gameOver = true;
            }
            this.updateGame();
        },
        heal: function () {
            var gotHealedBy = this.returnRounded(this.healPlayer);
            if (this.healthPlayer > 0 && this.healthPlayer <= 100) {
                this.healthPlayer = this.healthPlayer + gotHealedBy;
                this.fightLog.push('PLAYER IS ' + this.healthPlayer + ' AND GOT HEALED BY ' + gotHealedBy);
            }
            this.updateGame();
        },
        giveUp: function () {
            this.gameOver = true;
        },
        attackMonsterRound: function () {
            var hit = this.returnRounded(this.attackMonster);
            if (this.healthPlayer > 0 && this.healthPlayer <= 100) {
                this.healthPlayer = this.healthPlayer - hit;
                this.fightLog.push('MONSTER HITS PLAYER BY ' + hit);
            } else {
                this.healthPlayer = 0;
                this.gameOver = true;
            }
        },
        returnRounded: function (actionValue) {
            return Math.round(Math.random(actionValue) * 10)
        },
        checkValues: function () {
            if (this.healthPlayer > 100) {
                this.healthPlayer = 100;
            }
            if (this.healthPlayer <= 0) {
                this.healthPlayer = 0;
                this.gameOver = true;
            }
            if (this.healthMonster <= 0) {
                this.healthMonster = 0;
                this.gameOver = true;
            }
        },
        updateGame: function () {
            this.checkValues();
            this.debugOutput();
            this.attackMonsterRound();
        },
        debugOutput() {
            console.log('PLAYER HEALTH ' + this.healthPlayer);
            console.log('MONSTER HEALTH ' + this.healthMonster);
        }
    },
    watch: {

    }

});