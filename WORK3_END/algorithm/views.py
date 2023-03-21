from django.http import HttpResponse
from algorithm import main
import json



class NumpyEncoder(json.JSONEncoder):
    """ Special json encoder for numpy types """
    def default(self, obj):
        if isinstance(obj, np.integer):
            return int(obj)
        elif isinstance(obj, np.floating):
            return float(obj)
        elif isinstance(obj, np.ndarray):
            return obj.tolist()
        return json.JSONEncoder.default(self, obj)


def getTestView(request):
    out=main.getTestData()
    return HttpResponse(json.dumps(out, cls=NumpyEncoder, indent=4))
