# Pitest

----
## Wat is Pitest?

- State-of-the-art mutation testing framework voor Java
- Bytecode muteren
- `v1.0.0` op 18 Mei 2014

Note: Coverage probing genereert een map die laat zien welke test welk stukje code raakt.
Bytecode zorgt voor 'junk' mutaties, daarom niet geschikt voor Scala.

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

TODO: Nieuw report nodig :o

----

https://github.com/Wmaarts/pitest-mutation-testing-elements-plugin

```xml
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
