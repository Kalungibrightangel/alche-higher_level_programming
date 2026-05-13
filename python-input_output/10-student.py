#!/usr/bin/python3
"""Module that defines a Student class."""


class Student:
    """Define a student."""

    def __init__(self, first_name, last_name, age):
        """Initialize a Student instance."""
        self.first_name = first_name
        self.last_name = last_name
        self.age = age

    def to_json(self, attrs=None):
        """Retrieve a dictionary representation of the instance."""
        if type(attrs) is list:
            new_dict = {}

            for item in attrs:
                if type(item) is str and hasattr(self, item):
                    new_dict[item] = getattr(self, item)

            return new_dict

        return self.__dict__
