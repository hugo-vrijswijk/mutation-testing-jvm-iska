<!-- .slide: data-background-color="#dedede" -->

![pitest-logo](img/pitest-logo.png)


----
## Wat is Pitest?

- State-of-the-art mutation testing framework voor Java
- Bytecode muteren
- Eerste release op Github op 25 Maart 2014
- `v1.0.0` op 18 Mei 2014
- Laatste release `1.5.2` 1 maand geleden 

Note: Coverage probing genereert een map die laat zien welke test welk stukje code raakt.

----

### Bytecode mutatie
😃🡲 💻🡲 👽🡲 ✅ ❌ 🡲 📊

1. Source code
1. Byte code
1. Mutant
1. Killed / survived
1. Report

Note: Bytecode zorgt voor 'junk' mutaties, daarom niet geschikt voor Scala.

----

<img src="/img/java_5.png" />

Note: Zeg ook dat veel van de sourcecode in java 5 is geschreven, zo oud is het al. Stood the test of time.

----

> "Pitest bestond toch al? Wat heeft Info Support dan gedaan?"

----

<img src="/img/old_report.png" />

----

<img src="/img/hcoles.png" />

----

<img src="/img/new_report.png" />

----

https://github.com/Wmaarts/pitest-mutation-testing-elements-plugin

```xml [6-10,13-15]
<plugin>
    <groupId>org.pitest</groupId>
    <artifactId>pitest-maven</artifactId>
    <version>1.4.10</version>
    <dependencies>
        <dependency>
            <groupId>io.github.wmaarts</groupId>
            <artifactId>pitest-mutation-testing-elements-plugin</artifactId>
            <version>${pitest-mutation-testing-elements-plugin.version}</version>
        </dependency>
    </dependencies>
    <configuration>
        <outputFormats>
            <format>HTML2</format>
        </outputFormats>
    </configuration>
</plugin>
```

----

You should use it!
- Eenvoudig op te zetten
- Mutation score > code coverage

https://pitest.org/quickstart/
