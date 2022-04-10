

public class Gorilla extends Mammal{

    public void throwSomething() {
        System.out.println("Gorrilla has thrown something.");
        energyLevel -= 5;
    }

    public void eatBananas() {
        System.out.println("Gorilla is happy that he has gotten bananas to eat!");
        energyLevel += 10;
    }

    public void climb() {
        System.out.println("Gorilla has climbed a tree!");
        energyLevel -= 10;
    }
}
