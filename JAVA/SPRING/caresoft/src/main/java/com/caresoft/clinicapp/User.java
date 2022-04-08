
public class User {
    protected Integer id;
    protected int pin;

    public User(Integer id, int pin) {
        this.id = id;
        this.pin = pin;
    }

    public User() {
    }

    public boolean assignPin(int pin) {
        return false;
    }

    public boolean accessAuthorized(Integer confirmedAuthID) {
        return false;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getPin() {
        return this.pin;
    }

    public void setPin(int pin) {
        this.pin = pin;
    }


}
