<!-- .slide: data-background-color="#b74934" -->

![stryker-logo](img/stryker-logo.png)

# Stryker4s

----

## Scala

- 🤝 FP + OOP = ❤️
- Statically typed
- Java interop


Note: Scala combines object-oriented and functional programming in one concise, high-level language. Scala's static types help avoid bugs in complex applications, and its JVM and JavaScript runtimes let you build high-performance systems with easy access to huge ecosystems of libraries.

----

## Nice to meet you 🤝

- Versie 0.1.0 eind 2018 👶
- Laatste versie 0.8.1 🔮
- Source code muteren
- Scala-specifieke mutaties
- Fancy reporting

----

## Function mutators!

| Original           | Mutated            |
| ------------------ | ------------------ |
| `a.filter(b)`      | `a.filterNot(b)`   |
| `a.filterNot(b)`   | `a.filter(b)`      |
| `a.exists(b)`      | `a.forall(b)`      |
| `a.forall(b)`      | `a.exists(b)`      |
| more stuff!        | lots more! 🎁 |

----
<!-- .slide: data-auto-animate data-id="slide-mutability"-->

```scala [4]
def mutability() = {
  var a = 2
  val toAdd = doSomeComplicatedMaths
  a += toAdd
}
```


----
<!-- .slide: data-auto-animate data-id="slide-mutability"-->

```scala [4]
def mutability() = {
  var a = 2
  val toAdd = doSomeComplicatedMaths
  a += toAdd
}
```

<img data-src="https://i.imgflip.com/44ekns.jpg" />

----

<!-- .slide: data-auto-animate data-id="slide-addtwo" -->

<h2>Careful what you<br>mutate for</h2>

```scala " data-line-numbers=true
def addTwo(a: Int): Boolean = {
  a + 2
}
```
<!-- .element data-id="code-animation" -->

----

<!-- .slide: data-auto-animate data-id="slide-addtwo" -->

<h2>Careful what you<br>mutate for</h2>


```scala " data-line-numbers=true
def addTwo(a: Int): Boolean = {
  a - 2 // 👍
}
```
<!-- .element data-id="code-animation" -->

----

<!-- .slide: data-auto-animate -->

<h2>Careful what you<br>mutate for</h2>

```scala " data-line-numbers=true
def addWorld(a: String): Boolean = {
  a + "World!"
}
```
<!-- .element data-id="code-animation-2" -->

----

<!-- .slide: data-auto-animate -->

<h2>Careful what you<br>mutate for</h2>

```scala " data-line-numbers=true
def addWorld(a: String): Boolean = {
  a - "World!" // 💥
}
```
<!-- .element data-id="code-animation-2" -->

----

## The Stryker (JS/TS) way

![alt text](img/source-code-mutation.png)

Not for long: [https://github.com/stryker-mutator/stryker/issues/1514](https://github.com/stryker-mutator/stryker/issues/1514)

Note: niet geschikt voor Scala, want...
----

## The Pitest way

![alt text](img/byte-code-mutation.png)

Note: niet geschikt voor Scala, want...

----
<!-- .slide: data-auto-animate -->

```scala " data-line-numbers=true
case class Person(name: String, age: Int)
```
----
<!-- .slide: data-auto-animate -->

```java " data-line-numbers=true
public class Person implements scala.Product,java.io.Serializable {
  public static scala.Option<scala.Tuple2<java.lang.String, java.lang.Object>> unapply(Person);
  public static Person apply(java.lang.String, int);
  public static scala.Function1<scala.Tuple2<java.lang.String, java.lang.Object>, Person> tupled();
  public static scala.Function1<java.lang.String, scala.Function1<java.lang.Object, Person>> curried();
  public scala.collection.Iterator<java.lang.String> productElementNames();
  public java.lang.String name();
  public int age();
  public Person copy(java.lang.String, int);
  public java.lang.String copy$default$1();
  public int copy$default$2();
  public java.lang.String productPrefix();
  public int productArity();
  public java.lang.Object productElement(int);
  public scala.collection.Iterator<java.lang.Object> productIterator();
  public boolean canEqual(java.lang.Object);
  public java.lang.String productElementName(int);
  public int hashCode();
  public java.lang.String toString();
  public boolean equals(java.lang.Object);
  public Person(java.lang.String, int);
}
```
----
## The Stryker4s way

![alt text](img/mutation-switching.png)

----

## Mutation switching

<img data-src="https://i.imgflip.com/44eizk.jpg" />

----

<!-- .slide: data-auto-animate -->

## Mutation switching in practice

```scala " data-line-numbers=true
def greaterThan(a: Int, b: Int): Boolean = {
  a > b
}
```
<!-- .element data-id="code-animation" -->

----

<!-- .slide: data-auto-animate -->

## Mutation switching in practice

```scala " data-line-numbers=true
def greaterThan(a: Int, b: Int): Boolean = {
  // Mutant 1: a >= b
  // Mutant 2: a < b
  // Mutant 3: a == b
  a > b
}
```
<!-- .element data-id="code-animation" -->

----

<!-- .slide: data-auto-animate -->

## Mutation switching in practice

```scala " data-line-numbers=true
def greaterThan(a: Int, b: Int): Boolean = {
  sys.env("ACTIVE_MUTATION") match {
    case "0" => a >= b // Mutant 1
    case "1" => a < b  // Mutant 2
    case "2" => a == b // Mutant 3
    case _   => a > b  // Original mutation
  }
}
```
<!-- .element data-id="code-animation" -->

Note: nadelen
