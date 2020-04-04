# grun
- grun is an interactive tool that shows a parsed tree based on the given grammar files
1. Generate Parser & Lexer
  - antlr4 JSONLexer.g4 
  - antlr4 JSONParser.g4 
2. Compile generated parser & lexer
  - javac JSON*.java

3. run gui tool to see a parsed tree
  - grun JSON json -gui testArray.json 

# Description
- unlike the example given in [antlr repo](https://github.com/antlr/antlr4/blob/master/doc/getting-started.md), the above example uses split lexer and parser
- because of the split, notice the where wild card was used.
- even in the grun, only common prefix was given.
- the next argument for grun is rule name,
- the role of gui option is apparent
- the last argument is input file name

# Makefile
- you can also use included makefile to compile parsers
- you may need to update $JAR and $JAVA
- to compile parser
 * make all
- to clean 
 * make clean
- after parsers is compiled, to run grun to see a parsed tree
 * grun JSON json -gui testArray.json 