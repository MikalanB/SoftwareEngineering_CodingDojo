

public class Pokemon {
    
    private String name;
    private int attack;
    private int specAttack;
    private int defense;
    private int health;
    private boolean fainted;

    public Pokemon() {}


    public Pokemon(String name, int attack, int specAttack, int defense, int health, boolean fainted) {
        this.name = name;
        this.attack = attack;
        this.specAttack = specAttack;
        this.defense = defense;
        this.health = health;
        this.fainted = fainted;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAttack() {
        return this.attack;
    }

    public void setAttack(int attack) {
        this.attack = attack;
    }

    public int getSpecAttack() {
        return this.specAttack;
    }

    public void setSpecAttack(int specAttack) {
        this.specAttack = specAttack;
    }

    public int getDefense() {
        return this.defense;
    }

    public void setDefense(int defense) {
        this.defense = defense;
    }

    public int getHealth() {
        return this.health;
    }

    public void setHealth(int health) {
        this.health = health;
    }

    public boolean isFainted() {
        return this.fainted;
    }

    public boolean getFainted() {
        return this.fainted;
    }

    public void setFainted(boolean fainted) {
        this.fainted = fainted;
    }

}
