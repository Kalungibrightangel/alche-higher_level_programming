#!/usr/bin/python3
"""Module for writing text to a UTF-8 encoded file."""


def write_file(filename="", text=""):
    """Write a string to a text file (UTF-8) and return the number of characters written.

    Args:
        filename (str): The path to the file to write to.
                        Creates the file if it doesn't exist.
                        Overwrites the file if it already exists.
        text (str): The string content to write to the file.

    Returns:
        int: The number of characters written.
    """
    with open(filename, 'w', encoding='utf-8') as f:
        f.write(text)
    return len(text)
