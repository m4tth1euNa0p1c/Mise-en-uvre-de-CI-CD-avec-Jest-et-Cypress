from calculator import average


def test_average_basic():
    assert average([1, 2, 3, 4, 5]) == 3.0


def test_average_single():
    assert average([10]) == 10.0


def test_average_empty():
    assert average([]) == 0


def test_average_negative():
    assert average([-2, -4, -6]) == -4.0


def test_average_floats():
    assert average([1.5, 2.5, 3.0]) == 2.3333333333333335
