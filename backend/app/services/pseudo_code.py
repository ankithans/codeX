import re


def convertCodeIntoPseudoCode(source):
    work_file = None

    basic_conversion_rules = {"for": "FOR", "=": "TO", "if": "IF", "==": "EQUALS", "while": "WHILE", "until": "UNTIL", "import": "IMPORT",
                            "class": "DEFINE CLASS", "def": "DEFINE FUNCTION", "else:": "ELSE:", "elif": "ELSEIF", "except:": "EXCEPT:", "try:": "TRY:", "pass": "PASS", "in": "IN"}
    prefix_conversion_rules = {"=": "SET ", "#F": "CALL "}
    advanced_conversion_rules = {"print": "OUTPUT",
                                "return": "RETURN", "input": "INPUT"}


    def l2pseudo(to_pseudo):
        for line in to_pseudo:
            line_index = to_pseudo.index(line)
            line = str(line)
            line = re.split(r'(\s+)', line)
            for key, value in prefix_conversion_rules.items():
                if key in line:
                    if not str(line[0]) == '':
                        line[0] = value + line[0]
                    else:
                        line[2] = value + line[2]
            for key, value in basic_conversion_rules.items():
                for word in line:
                    if key == str(word):
                        line[line.index(word)] = value
            for key, value in advanced_conversion_rules.items():
                for word in line:
                    line[line.index(word)] = word.replace(key, value)
            for key, value in prefix_conversion_rules.items():
                for word in line:
                    if word == key:
                        del line[line.index(word)]
            to_pseudo[line_index] = "".join(line)
        return(to_pseudo)


    def p2file(to_file):
        file = open(python_file + '_pseudo.txt', 'w')
        for line in to_file:
            print(line, file=file)


    work_file = l2pseudo(source.splitlines())
    return work_file

