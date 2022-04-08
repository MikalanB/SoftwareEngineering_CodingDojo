import java.util.ArrayList;

public class Spades {
    public ArrayList<Object> getCards() {
        String king = "King";
        String queen = "Queen";
        String jack = "Jack";
        String ace = "Ace";

        ArrayList<Object> deckOfSpades = new ArrayList<Object>();

        deckOfSpades.add(ace);
        deckOfSpades.add(king);
        deckOfSpades.add(queen);
        deckOfSpades.add(jack);

        for (int i = 1; i <= 10; i++) {
            deckOfSpades.add(i);
        }

        return deckOfSpades;
    } 
}
