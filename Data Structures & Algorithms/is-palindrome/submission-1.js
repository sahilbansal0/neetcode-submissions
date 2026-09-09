class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
   isPalindrome(s) {
  function isAlphaNumeric(char) {
    return (
        (char >= 'a' && char <= 'z') ||
        (char >= 'A' && char <= 'Z') ||
        (char >= '0' && char <= '9')
    );
}

    let left = 0;
    let right = s.length - 1;

    while (left < right) {

        // Skip non-alphanumeric characters
         while (left < right && !isAlphaNumeric(s[left])) {
            left++;
        }

        while (left < right && !isAlphaNumeric(s[right])) {
            right--;
        }


        // Compare
        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

}
