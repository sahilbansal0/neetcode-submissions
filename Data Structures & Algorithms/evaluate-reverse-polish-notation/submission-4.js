class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
    let stack = []
    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] === "+" || tokens[i] === "-" || tokens[i] === "*" || tokens[i] === "/") {
                let elem2 = Number(stack.pop());
              let elem1 =  Number(stack.pop());
                switch (tokens[i]) {
                    case "+":
                        stack.push(elem1 + elem2)
                        break;
                    case "-":
                        stack.push(elem1 - elem2)
                        break;
                    case "*":
                        stack.push(elem1 * elem2)
                        break;
                    case "/":
                        stack.push(Math.trunc(elem1 / elem2))
                        break;

                    default:
                        break;
                }
        }
        else {
            stack.push(tokens[i])
        }

    }
    return stack.pop()
}

}
