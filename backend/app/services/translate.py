  
from translate import Translator


def translateText(text_to_translate, target_language):
    text_to_translate = text_to_translate
    strTolang = target_language
    translator = Translator(to_lang=strTolang)
    translate = translator.translate(text_to_translate)
    return (str(translate))