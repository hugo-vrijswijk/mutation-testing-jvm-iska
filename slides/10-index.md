<!-- .slide: data-background="/img/title.png" data-background-size="contain" data-background-color="#e84b3c" -->

# Mutation testing in JVM-land

----

# Welkom 🙋‍♂️!

Note: Voorstellen

----

## Agenda

- Wat is mutation testing
- Mutation testing voor Java (Pitest)
- Mutation testing voor Scala (Stryker4s)

Note: stel vragen tussendoor

---

# Mutation testing

- Test effectiviteit van tests

----

### Unit test

```scala
// Production code
def isAllowedToBuyAlcohol(customer: Person) = {
  customer.age >= 18
}
```

```scala
// Test
val customer = Person("Mark", 24)
assert(isAllowedToBuyAlcohol(customer))
```

Note: Code coverage is hier 100%

----

### How it works

<span class="logo">😃</span><span class="logo-arrow">🡲</span> <!-- .element class="fragment" data-fragment-index="1" --> 
<span class="logo fragment" data-fragment-index="1">👽</span><span class="logo-arrow">🡲</span> <!-- .element class="fragment" data-fragment-index="2" -->
<span class="logo fragment" data-fragment-index="2">✅</span>
<span class="logo fragment" data-fragment-index="2">❌</span>
<span class="logo-arrow">🡲</span> <!-- .element class="fragment" data-fragment-index="3" -->
<span class="fragment logo" data-fragment-index="3">📊</span>

1. Source code
1. <!-- .element class="fragment" data-fragment-index="1" -->Mutant
1. <!-- .element class="fragment" data-fragment-index="2" -->Killed / survived
1. <!-- .element class="fragment" data-fragment-index="3" -->Report

----

## Pros and cons

* 👍 High quality effectiveness report
* 👎 Might take a long time to execute
* 👎 <!-- .element class="fragment" data-fragment-index="1" --> Less known than code coverage

<!-- .element class="no-list"  -->

(we need your help!)

<!-- .element class="fragment" data-fragment-index="1" -->

Note: Dat is wat mutation testing is. Voor en nadelen zijn...

----

## Frameworks

 Language            | Framework   
 ------------------|:-------
 Java    | PITest   
 PHP | InfectionPHP   
 Ruby | Mutant   
 Python | Cosmic Ray   
 C/C++ | Mull   

----

### Stryker frameworks

 Language            | Framework   
 ------------------|:-------
 Scala | Stryker4s   
 JS/TS   | Stryker   
 C# | Stryker.NET   

---

FILE: 20-pitest.md

---

FILE: 30-stryker4s.md

---

FILE: 40-end.md
