var list = ["A","B","C","D","E","F","G","H","I","J"];
        var money1 = 15;
        var money2 = 15;
        var player1;
        var player2;
        var factory1 = [];
        var factory2 = [];
        var nobodies = [];
        var ja = [-5, -4, -3, -2, -1, 6];
        var bc = [-4, -3, -2, -1, 1, 2];
        var de = [-3, -2, -1, 1, 2, 3];
        var fg = [-3, -2, 0, 1, 2, 3];
        var hi = [-4, 0, 1, 2, 3, 4];
        var player1Facs = function() {
            confirm(player1 + "'s factories are " + factory1);
        }
        var player2Facs = function() {
            confirm(player2 + "'s factories are " + factory2);
        }
        var oneMoney = function() {
            confirm(player1 + " has " + money1 + "$");
        }
        var twoMoney = function() {
            confirm(player2 + " has " + money2 + "$");
        }
        var grabs = function() {
            confirm("the available factories are " + nobodies);
        }
        var bidding = function() {
            player1 = prompt("What is the first player's name?");
            player2 = prompt("What is the second player's name?");
            var askPlayer = player1;
            var notAskPlayer;
            if (askPlayer === player1) {
                notAskPlayer = player2;
            } else {
                notAskPlayer = player1;
            }
            for (var i = 0; i < list.length; i++) {
                var ask2;
                var bid = 0;
                var askBid = bid + 1;
                var redo = true;
                var ask1 = prompt(player1 + ", will you put in a bid for factory " + list[i] + "? You would have to bid " + askBid + ", and you have " + money1,"type in yes or pass").toLowerCase();
                if (ask1 === "yes") {
                    bid += 1;
                    askBid = bid + 1;
                    ask2 = prompt(player2 + ", will you put in a bid for factory " + list[i] + "? You would have to bid " + askBid ", and you have " + money2,"type in yes or pass").toLowerCase();
                    if (ask2 === "yes") {
                        bid += 1;
                        askBid = bid + 1;
                        //run the while loop
                        //other comment to draw my attention
                        while(redo) {
                            ask1 = prompt(player1 + ", will you rebid for factory " + list[i] + "? Your bid would be " + askBid + " and you have " + money1, "type in yes or pass").toLowerCase();
                            if (ask1 === "yes") {
                                bid += 1;
                                askBid = bid + 1;
                                ask2 = prompt(player2 + ", will you rebid for factory " + list[i] + "? Your bid would be " + askBid + " and you have " + money2, "type in yes or pass").toLowerCase();
                                if (ask2 === "yes") {
                                    bid += 1;
                                    askBid = bid + 1;
                                } else {
                                    factory1.push(list[i]);
                                    money1 += -bid;
                                    confirm(player1 + " has " + money1 + "$");
                                    redo = false;
                                }
                            } else {
                                factory2.push(list[i]);
                                money2 += -bid;
                                confirm(player2 + " has " + money2 + "$");
                                redo = false;
                            }
                        }
                    } else if (ask2 === "pass") {
                        factory1.push(list[i]);
                        money1 += -bid;
                        confirm(player1 + " has " + money1 + "$");
                    } else {
                        factory1.push(list[i]);
                        money1 += -bid;
                        confirm(player1 + "has " + money1 + "$");
                    }
                } else if (ask1 === "pass") {
                    ask2 = prompt(player2 + ", will you put in a bid for factory " + list[i] + "? You would have to bid " + askBid,"type in yes or pass").toLowerCase();
                    if (ask2 === "yes") {
                        bid += 1;
                        factory2.push(list[i]);
                        money2 += -bid;
                        confirm(player2 + " has " + money2 + "$");
                    } else {
                        nobodies.push(list[i]);
                    }
                }
            }
            confirm(player1 + "'s factories are " + factory1);
            confirm(player1 + " has " + money1 + "$");
            confirm(player2 + "'s factories are " + factory2);
            confirm(player2 + " has " + money2 + "$");
            confirm("The factories up for grabs are " + nobodies);
        }
