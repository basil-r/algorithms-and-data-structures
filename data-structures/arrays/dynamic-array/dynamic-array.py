chars = ["a", "b", "c", "d", "e"]

# access - lookup O(1)
c = chars[2]

# search O(n)
d_index = chars.index("d")

# insertion O(n)
chars.insert(2, "x")

# deletion O(n)
chars.pop(4)
