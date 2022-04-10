package assignments.listOfExceptions;

import java.util.ArrayList;
class noList extends Exception{};
public class list {
    public Integer getList() throws noList{
        ArrayList<Object> myList = new ArrayList<Object>();
        myList.add("13");
        myList.add("hello world");
        myList.add(48);
        myList.add("Goodbye World");

        Integer castedValue = 0;
        for(int i = 0; i < myList.size(); i++) {
            castedValue = (Integer) myList.get(i);
        }
        return castedValue;


    }
}
