import java.util.ArrayList;

public class Hearts {
    public ArrayList<Object> getCards() {
        String king = "King";
        String queen = "Queen";
        String jack = "Jack";
        String ace = "Ace";

        ArrayList<Object> deckOfHearts = new ArrayList<Object>();

        deckOfHearts.add(ace);
        deckOfHearts.add(king);
        deckOfHearts.add(queen);
        deckOfHearts.add(jack);

        for (int i = 1; i <= 10; i++) {
            deckOfHearts.add(i);
        }

        return deckOfHearts;
    } 
}
