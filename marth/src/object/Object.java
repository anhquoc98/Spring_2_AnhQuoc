package object;

public class Object {
    private String name;
    private int age;

    public Object(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public Object() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
