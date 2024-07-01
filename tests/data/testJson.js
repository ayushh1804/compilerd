const testCases = [
    {
        name: 'cpp : hello world',
        reqObject: {
            language: 'cpp',
            script:
                '#include<bits/stdc++.h>\n' +
                'using namespace std;\n' +
                'int main(){\n' +
                '    cout << "hello world";\n' +
                'return 0;\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'cpp : print stdin',
        reqObject: {
            language: 'cpp',
            script:
                '#include<bits/stdc++.h>\n\n' +
                'using namespace std;\n' +
                'int main(){\n\n' +
                '    int a;\n' +
                '    while(cin >> a){\n' +
                '        cout << a << endl;\n' +
                '    }\n' +
                '    return 0;\n\n' +
                '}\n',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },

    },
    {
        name: 'cpp : addition',
        reqObject: {
            language: 'cpp',
            script:
                '#include<bits/stdc++.h>\n' +
                'using namespace std;\n' +
                'int main(){\n' +
                '    int a, b;\n' +
                '    cin >> a >> b;\n' +
                '    cout << a + b << endl;\n' +
                '    return 0;\n' +
                '}\n',
            stdin: '3 4',
        },
        expectedResponse: {
            val: '7\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'cpp : multiplication',
        reqObject: {
            language: 'cpp',
            script:
                '#include<bits/stdc++.h>\n' +
                'using namespace std;\n' +
                'int main(){\n' +
                '    int a, b;\n' +
                '    cin >> a >> b;\n' +
                '    cout << a * b << endl;\n' +
                '    return 0;\n' +
                '}\n',
            stdin: '3 4',
        },
        expectedResponse: {
            val: '12\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'cpp : string input',
        reqObject: {
            language: 'cpp',
            script:
                '#include<bits/stdc++.h>\n' +
                'using namespace std;\n' +
                'int main(){\n' +
                '    string s;\n' +
                '    cin >> s;\n' +
                '    cout << s << endl;\n' +
                '    return 0;\n' +
                '}\n',
            stdin: 'hello',
        },
        expectedResponse: {
            val: 'hello\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'nodejs : hello world',
        reqObject: {
            language: 'nodejs',
            script: 'console.log(\'hello world\')',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'nodejs : print stdin',
        reqObject: {
            language: 'nodejs',
            script:
                'process.stdin.setEncoding(\'utf8\'); \n ' +
                'process.stdin.on(\'data\', (input) => { \n ' +
                '  console.log(input); \n ' +
                ' \n ' +
                '}); \n ',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1 2 3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'nodejs : addition',
        reqObject: {
            language: 'nodejs',
            script:
                'const readline = require("readline");\n' +
                'const rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n' +
                'let input = [];\n' +
                'rl.on("line", (line) => { input.push(line); }).on("close", () => {\n' +
                '    const [a, b] = input[0].split(" ").map(Number);\n' +
                '    console.log(a + b);\n' +
                '});',
            stdin: '3 4',
        },
        expectedResponse: {
            val: '7\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'nodejs : multiplication',
        reqObject: {
            language: 'nodejs',
            script:
                'const readline = require("readline");\n' +
                'const rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n' +
                'let input = [];\n' +
                'rl.on("line", (line) => { input.push(line); }).on("close", () => {\n' +
                '    const [a, b] = input[0].split(" ").map(Number);\n' +
                '    console.log(a * b);\n' +
                '});',
            stdin: '3 4',
        },
        expectedResponse: {
            val: '12\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'nodejs : string input',
        reqObject: {
            language: 'nodejs',
            script:
                'const readline = require("readline");\n' +
                'const rl = readline.createInterface({ input: process.stdin, output: process.stdout });\n' +
                'rl.on("line", (line) => { console.log(line); rl.close(); });',
            stdin: 'hello',
        },
        expectedResponse: {
            val: 'hello\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'python : hello world',
        reqObject: {
            language: 'python',
            script: 'print(\'hello world\')',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'python : print stdin',
        reqObject: {
            language: 'python',
            script:
                'try:\n' +
                '    while(True):\n' +
                '        line = input()\n' +
                '        if not line:\n' +
                '            break\n' +
                '        print(line)\n' +
                'except EOFError:\n' +
                '    pass',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1 2 3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'python : addition',
        reqObject: {
            language: 'python',
            script:
                'a, b = map(int, input().split())\n' +
                'print(a + b)',
            stdin: '3 4',
        },
        expectedResponse: {
            val: '7\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'python : multiplication',
        reqObject: {
            language: 'python',
            script:
                'a, b = map(int, input().split())\n' +
                'print(a * b)',
            stdin: '3 4',
        },
        expectedResponse: {
            val: '12\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'python : string input',
        reqObject: {
            language: 'python',
            script:
                's = input()\n' +
                'print(s)',
            stdin: 'hello',
        },
        expectedResponse: {
            val: 'hello\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'c : hello world',
        reqObject: {
            language: 'c',
            script:
                '#include<stdio.h>\n\n' +
                'int main(){\n\n' +
                '    printf("hello world");\n' +
                '    return 0;\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'c : print stdin',
        reqObject: {
            language: 'c',
            script:
                '#include <stdio.h>\n' +
                'int main() {\n' +
                '    int number;\n' +
                '    while (scanf("%d", &number) == 1) {\n' +
                '        printf("%d\\n", number);\n' +
                '    } \n' +
                '    return 0;\n' +
                '}',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'c : addition',
        reqObject: {
            language: 'c',
            script:
                '#include <stdio.h>\n' +
                'int main() {\n' +
                '    int a, b;\n' +
                '    scanf("%d %d", &a, &b);\n' +
                '    printf("%d\\n", a + b);\n' +
                '    return 0;\n' +
                '}',
            stdin: '3 4',
        },
        expectedResponse: {
            val: '7\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'c : multiplication',
        reqObject: {
            language: 'c',
            script:
                '#include <stdio.h>\n' +
                'int main() {\n' +
                '    int a, b;\n' +
                '    scanf("%d %d", &a, &b);\n' +
                '    printf("%d\\n", a * b);\n' +
                '    return 0;\n' +
                '}',
            stdin: '3 4',
        },
        expectedResponse: {
            val: '12\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'c : string input',
        reqObject: {
            language: 'c',
            script:
                '#include <stdio.h>\n' +
                'int main() {\n' +
                '    char s[100];\n' +
                '    scanf("%s", s);\n' +
                '    printf("%s\\n", s);\n' +
                '    return 0;\n' +
                '}',
            stdin: 'hello',
        },
        expectedResponse: {
            val: 'hello\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'java : print stdin',
        reqObject: {
            language: 'java',
            script:
                'import java.util.Scanner;\n' +
                'public class Solution {\n' +
                '    public static void main(String[] args) {\n' +
                '        System.out.println("hello world");\n' +
                '    }\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'java : print stdin',
        reqObject: {
            language: 'java',
            script:
                'import java.util.Scanner;\n' +
                'public class Solution {\n' +
                '    public static void main(String[] args) {\n' +
                '        Scanner scanner = new Scanner(System.in);\n' +
                '        while (scanner.hasNextInt()) {\n' +
                '            int number = scanner.nextInt();\n' +
                '            System.out.println(number);\n' +
                '        } \n' +
                '        scanner.close();\n' +
                '    }\n' +
                '}\n',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'java : addition',
        reqObject: {
            language: 'java',
            script:
                'import java.util.Scanner;\n' +
                'public class Solution {\n' +
                '    public static void main(String[] args) {\n' +
                '        Scanner scanner = new Scanner(System.in);\n' +
                '        int a = scanner.nextInt();\n' +
                '        int b = scanner.nextInt();\n' +
                '        System.out.println(a + b);\n' +
                '        scanner.close();\n' +
                '    }\n' +
                '}',
            stdin: '3 4',
        },
        expectedResponse: {
            val: '7\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'java : multiplication',
        reqObject: {
            language: 'java',
            script:
                'import java.util.Scanner;\n' +
                'public class Solution {\n' +
                '    public static void main(String[] args) {\n' +
                '        Scanner scanner = new Scanner(System.in);\n' +
                '        int a = scanner.nextInt();\n' +
                '        int b = scanner.nextInt();\n' +
                '        System.out.println(a * b);\n' +
                '        scanner.close();\n' +
                '    }\n' +
                '}',
            stdin: '3 4',
        },
        expectedResponse: {
            val: '12\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'java : string input',
        reqObject: {
            language: 'java',
            script:
                'import java.util.Scanner;\n' +
                'public class Solution {\n' +
                '    public static void main(String[] args) {\n' +
                '        Scanner scanner = new Scanner(System.in);\n' +
                '        String s = scanner.next();\n' +
                '        System.out.println(s);\n' +
                '        scanner.close();\n' +
                '    }\n' +
                '}',
            stdin: 'hello',
        },
        expectedResponse: {
            val: 'hello\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'ruby : print hello world',
        reqObject: {
            language: 'ruby',
            script:
                'print "hello world"'
        },
        expectedResponse: {
            val: 'hello world',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'ruby : print stdin',
        reqObject: {
            language: 'ruby',
            script:
                'user_input = gets.chomp\n' +
                'puts user_input',
            stdin: '10\n'
        },
        expectedResponse: {
            val: '10\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'ruby : multiplication',
        reqObject: {
            language: 'ruby',
            script:
                'a, b = gets.split.map(&:to_i)\n' +
                'puts a * b',
            stdin: '3 4\n',
        },
        expectedResponse: {
            val: '12\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'ruby : string input',
        reqObject: {
            language: 'ruby',
            script:
                's = gets.chomp\n' +
                'puts s',
            stdin: 'hello\n',
        },
        expectedResponse: {
            val: 'hello\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'TLE test',
        reqObject: {
            language: 'nodejs',
            script: 'for(let i=0 ; ; ){i++}',
        },
        expectedResponse: {
            val: 'Time limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'MLE test',
        reqObject: {
            language: 'python',
            script: 'one_gb_data = bytearray(1000 * 1024 * 1024)',
        },
        expectedResponse: {
            val: 'Memory limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'MLE test 2',
        reqObject: {
            language: 'python',
            script:
                'import time\n' +
                'def consume_memory(target_mb, duration_sec):\n' +
                '    float_size = 8\n' +
                '    floats_per_mb = (1024 * 1024) // float_size\n' +
                '    total_floats = target_mb * floats_per_mb\n' +
                '    iterations = int(duration_sec / 0.1)\n' +
                '    floats_per_iteration = total_floats // iterations\n' +
                '    memory_hog = []\n' +
                '    for _ in range(iterations):\n' +
                '        memory_hog.extend([0.0] * floats_per_iteration)\n' +
                '        time.sleep(0.1)\n' +
                'consume_memory(1000, 1)\n',
        },
        expectedResponse: {
            val: 'Memory limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'MLE test 3',
        reqObject: {
            language: 'python',
            script:
                'a = [100]\n' +
                'for i in a:\n' +
                '    a.append(i)\n',
        },
        expectedResponse: {
            val: 'Memory limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'OPEN AI test promptv1',
        reqObject: {
            language: 'promptv1',
            prompt: 'The question is what is 2 plus 2. The answer given is 4.',
        },
        expectedResponse: {
            val: {},
            status: 200,
            error: 0,
        },
    },
    {
        name: 'OPEN AI test promptv2',
        reqObject: {
            language: 'promptv2',
            prompt: 'The question is what is 2 plus 2. The answer given is 4.',
        },
        expectedResponse: {
            val: {},
            status: 200,
            error: 0,
        },
    },
    {
        name: 'go : hello world',
        reqObject: {
            language: 'go',
            script:
                'package main\n' +
                'import "fmt"\n' +
                'func main() {\n' +
                '    fmt.Println("hello world")\n' +
                '}',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'go : print stdin',
        reqObject: {
            language: 'go',
            script:
                'package main\n' +
                'import "fmt"\n' +
                'import "bufio"\n' +
                'import "os"\n' +
                'func main() {\n' +
                '    scanner := bufio.NewScanner(os.Stdin)\n' +
                '    for scanner.Scan() {\n' +
                '        fmt.Println(scanner.Text())\n' +
                '    }\n' +
                '}',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1 2 3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'go : addition',
        reqObject: {
            language: 'go',
            script:
                'package main\n' +
                'import "fmt"\n' +
                'func main() {\n' +
                '    var a, b int\n' +
                '    fmt.Scanf("%d %d", &a, &b)\n' +
                '    fmt.Println(a + b)\n' +
                '}',
            stdin: '3 4',
        },
        expectedResponse: {
            val: '7\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'go : multiplication',
        reqObject: {
            language: 'go',
            script:
                'package main\n' +
                'import "fmt"\n' +
                'func main() {\n' +
                '    var a, b int\n' +
                '    fmt.Scanf("%d %d", &a, &b)\n' +
                '    fmt.Println(a * b)\n' +
                '}',
            stdin: '3 4',
        },
        expectedResponse: {
            val: '12\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'go : string input',
        reqObject: {
            language: 'go',
            script:
                'package main\n' +
                'import "fmt"\n' +
                'func main() {\n' +
                '    var s string\n' +
                '    fmt.Scan(&s)\n' +
                '    fmt.Println(s)\n' +
                '}',
            stdin: 'hello',
        },
        expectedResponse: {
            val: 'hello\n',
            status: 200,
            error: 0,
        },
    },

    // PHP test cases
    {
        name: 'php : hello world',
        reqObject: {
            language: 'php',
            script: '<?php echo "hello world"; ?>',
        },
        expectedResponse: {
            val: 'hello world',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'php : print stdin',
        reqObject: {
            language: 'php',
            script: '<?php while ($line = fgets(STDIN)) { echo $line; } ?>',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1 2 3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'php : addition',
        reqObject: {
            language: 'php',
            script:
                '<?php\n' +
                '$input = explode(" ", fgets(STDIN));\n' +
                '$a = (int)$input[0];\n' +
                '$b = (int)$input[1];\n' +
                'echo $a + $b;\n' +
                '?>',
            stdin: '3 4',
        },
        expectedResponse: {
            val: '7',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'php : multiplication',
        reqObject: {
            language: 'php',
            script:
                '<?php\n' +
                '$input = explode(" ", fgets(STDIN));\n' +
                '$a = (int)$input[0];\n' +
                '$b = (int)$input[1];\n' +
                'echo $a * $b;\n' +
                '?>',
            stdin: '3 4',
        },
        expectedResponse: {
            val: '12',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'php : string input',
        reqObject: {
            language: 'php',
            script:
                '<?php\n' +
                '$s = fgets(STDIN);\n' +
                'echo $s;\n' +
                '?>',
            stdin: 'hello',
        },
        expectedResponse: {
            val: 'hello\n',
            status: 200,
            error: 0,
        },
    },

    // Swift test cases
    {
        name: 'swift : hello world',
        reqObject: {
            language: 'swift',
            script: 'print("hello world")',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'swift : print stdin',
        reqObject: {
            language: 'swift',
            script:
                'import Foundation\n' +
                'while let input = readLine() {\n' +
                '    print(input)\n' +
                '}',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'swift : addition',
        reqObject: {
            language: 'swift',
            script:
                'import Foundation\n' +
                'if let input = readLine() {\n' +
                '    let numbers = input.split(separator: " ").map { Int($0)! }\n' +
                '    print(numbers[0] + numbers[1])\n' +
                '}',
            stdin: '3 4',
        },
        expectedResponse: {
            val: '7\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'swift : multiplication',
        reqObject: {
            language: 'swift',
            script:
                'import Foundation\n' +
                'if let input = readLine() {\n' +
                '    let numbers = input.split(separator: " ").map { Int($0)! }\n' +
                '    print(numbers[0] * numbers[1])\n' +
                '}',
            stdin: '3 4',
        },
        expectedResponse: {
            val: '12\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'swift : string input',
        reqObject: {
            language: 'swift',
            script:
                'import Foundation\n' +
                'if let input = readLine() {\n' +
                '    print(input)\n' +
                '}',
            stdin: 'hello',
        },
        expectedResponse: {
            val: 'hello\n',
            status: 200,
            error: 0,
        },
    },


    // Kotlin test cases
    {
        name: 'kotlin : hello world',
        reqObject: {
            language: 'kotlin',
            script: 'fun main() { println("hello world") }',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'kotlin : print stdin',
        reqObject: {
            language: 'kotlin',
            script:
                'fun main() {\n' +
                '    val input = generateSequence(::readLine)\n' +
                '    input.forEach { println(it) }\n' +
                '}',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'kotlin : addition',
        reqObject: {
            language: 'kotlin',
            script:
                'fun main() {\n' +
                '    val (a, b) = readLine()!!.split(" ").map { it.toInt() }\n' +
                '    println(a + b)\n' +
                '}',
            stdin: '3 4',
        },
        expectedResponse: {
            val: '7\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'kotlin : multiplication',
        reqObject: {
            language: 'kotlin',
            script:
                'fun main() {\n' +
                '    val (a, b) = readLine()!!.split(" ").map { it.toInt() }\n' +
                '    println(a * b)\n' +
                '}',
            stdin: '3 4',
        },
        expectedResponse: {
            val: '12\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'kotlin : string input',
        reqObject: {
            language: 'kotlin',
            script:
                'fun main() {\n' +
                '    val input = readLine()!!\n' +
                '    println(input)\n' +
                '}',
            stdin: 'hello',
        },
        expectedResponse: {
            val: 'hello\n',
            status: 200,
            error: 0,
        },
    },


    // Scala test cases
    {
        name: 'scala : hello world',
        reqObject: {
            language: 'scala',
            script:
                'object Solution {\n' +
                '    def main(args: Array[String]): Unit = {\n' +
                '        println("hello world")\n' +
                '    }\n' +
                '}',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'scala : print stdin',
        reqObject: {
            language: 'scala',
            script:
                'object Solution {\n' +
                '    def main(args: Array[String]): Unit = {\n' +
                '        scala.io.Source.stdin.getLines().foreach(println)\n' +
                '    }\n' +
                '}',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'scala : addition',
        reqObject: {
            language: 'scala',
            script:
                'object Solution {\n' +
                '    def main(args: Array[String]): Unit = {\n' +
                '        val input = scala.io.StdIn.readLine().split(" ").map(_.toInt)\n' +
                '        println(input(0) + input(1))\n' +
                '    }\n' +
                '}',
            stdin: '3 4',
        },
        expectedResponse: {
            val: '7\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'scala : multiplication',
        reqObject: {
            language: 'scala',
            script:
                'object Solution {\n' +
                '    def main(args: Array[String]): Unit = {\n' +
                '        val input = scala.io.StdIn.readLine().split(" ").map(_.toInt)\n' +
                '        println(input(0) * input(1))\n' +
                '    }\n' +
                '}',
            stdin: '3 4',
        },
        expectedResponse: {
            val: '12\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'scala : string input',
        reqObject: {
            language: 'scala',
            script:
                'object Solution {\n' +
                '    def main(args: Array[String]): Unit = {\n' +
                '        val input = scala.io.StdIn.readLine()\n' +
                '        println(input)\n' +
                '    }\n' +
                '}',
            stdin: 'hello',
        },
        expectedResponse: {
            val: 'hello\n',
            status: 200,
            error: 0,
        },
    },
]

module.exports = { testCases }
