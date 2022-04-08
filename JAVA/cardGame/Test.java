import java.util.HashMap;

public class Test {
    public static void main(String[] args) {
        Clubs clubDeck = new Clubs();
        Hearts heartsDeck = new Hearts();
        Diamonds diamondDeck = new Diamonds();
        Spades spadesDeck = new Spades();

        // System.out.println(clubDeck.getCards());
        // System.out.println(heartsDeck.getCards());
        // System.out.println(diamondDeck.getCards());
        // System.out.println(spadesDeck.getCards());

        HashMap<String, Object> fullDeck = new HashMap<String, Object>();
        fullDeck.put("Hearts", heartsDeck.getCards());
        fullDeck.put("Diamonds", diamondDeck.getCards());
        fullDeck.put("Spades", spadesDeck.getCards());
        fullDeck.put("Clubs", clubDeck.getCards());

        System.out.println(fullDeck);

        
    }
}
