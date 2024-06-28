def addCommas(number):
    # Convert number to string to handle formatting
    number_str = str(number)
    
    # Handle negative numbers
    if number_str[0] == '-':
        sign = '-'
        number_str = number_str[1:]
    else:
        sign = ''
    
    # Split the number into integer and fractional parts
    if '.' in number_str:
        integer_part, fractional_part = number_str.split('.')
    else:
        integer_part, fractional_part = number_str, ''
    
    # Add commas to the integer part
    integer_part_with_commas = '{:,}'.format(int(integer_part))
    
    # Combine the parts back together
    if fractional_part:
        result = f"{sign}{integer_part_with_commas}.{fractional_part}"
    else:
        result = f"{sign}{integer_part_with_commas}"
    
    return result

# Tests
test_cases = [
    (1234, "1,234"),
    (1000000, "1,000,000"),
    (9876543210, "9,876,543,210"),
    (6, "6"),
    (-10, "-10"),
    (-5678, "-5,678"),
    # Bonus cases
    (12345.678, "12,345.678"),
    (-3141592.65, "-3,141,592.65")
]

for number, expected in test_cases:
    result = addCommas(number)
    print(f"addCommas({number}) = '{result}' | Expected = '{expected}' | Test {'PASSED' if result == expected else 'FAILED'}")
