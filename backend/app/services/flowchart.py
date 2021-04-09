from pyflowchart import Flowchart


def generateFlowChartData(source):
    fc = Flowchart.from_code(source)
    return fc.flowchart()