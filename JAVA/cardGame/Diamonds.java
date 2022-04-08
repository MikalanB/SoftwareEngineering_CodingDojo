import java.util.ArrayList;

public class Diamonds {
    public ArrayList<Object> getCards() {
        String king = "King";
        String queen = "Queen";
        String jack = "Jack";
        String ace = "Ace";

        ArrayList<Object> deckOfDiamonds = new ArrayList<Object>();

        deckOfDiamonds.add(ace);
        deckOfDiamonds.add(king);
        deckOfDiamonds.add(queen);
        deckOfDiamonds.add(jack);

        for (int i = 1; i <= 10; i++) {
            deckOfDiamonds.add(i);
        }

        return deckOfDiamonds;
    } 
    
}
