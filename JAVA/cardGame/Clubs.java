import java.util.ArrayList;

public class Clubs {
    public ArrayList<Object> getCards() {

        ArrayList<Object> deckOfClubs = new ArrayList<Object>();


        for (int i = 1; i <= 13; i++) {
            deckOfClubs.add(i);
        }

        return deckOfClubs;
    } 
}
