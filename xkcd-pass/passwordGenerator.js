/* XKCD password generator
Generates passwords made of random basic English words

Anjana Vakil and Shad Hopson
November 24, 2015
Made with <3 at the Recurse Center (www.recurse.com)

Inspiration: http://xkcd.com/936/
Word list source (based on Ogden's Basic Word list): https://bitbucket.org/snippets/gravitywell_ltd/bqzj
*/


var words = ['a', 'able', 'about', 'account', 'acid', 'across', 'act', 'addition', 'adjustment', 'advertisement', 'agreement', 'after', 'again', 'against', 'air', 'all', 'almost', 'am', 'among', 'amount', 'amusement', 'an', 'and', 'angry', 'angle', 'animal', 'answer', 'ant', 'any', 'apparatus', 'apple', 'approval', 'arch', 'argument', 'arm', 'army', 'art', 'as', 'association', 'at', 'attack', 'attempt', 'attention', 'attitude', 'attraction', 'authority', 'automatic', 'awake', 'alcohol', 'Algebra', 'aluminum', 'ammonia', 'anesthetic', 'April', 'Arithmetic', 'asbestos', 'August', 'autobus', 'automobile', 'abdomen', 'absence', 'absorption', 'acceleration', 'acceptance', 'accessory', 'accident', 'active', 'address', 'adjacent', 'adventure', 'advice', 'age', 'agent', 'agency', 'ago', 'allowance', 'along', 'also', 'alternative', 'always', 'ambition', 'amplitude', 'anchor', 'ankle', 'appendage', 'application', 'approximation', 'arbitration', 'arbitrary', 'arc', 'area', 'arrangement', 'ash', 'asset', 'assistant', 'average', 'awkward', 'axis', 'aftereffect', 'afftertaste', 'afterthought', 'aircushion', 'airman', 'airmen', 'airplane', 'airtight', 'another', 'anybody', 'anyhow', 'anyone', 'anything', 'anywhere', 'away', 'actor', 'acting', 'baby', 'back', 'bad', 'bag', 'balance', 'ball', 'band', 'base', 'basin', 'basket', 'bath', 'be', 'beautiful', 'because', 'bed', 'bee', 'been', 'before', 'behavior', 'belief', 'bell', 'bent', 'berry', 'best', 'better', 'between', 'bird', 'birth', 'bit', 'bite', 'bitter', 'black', 'blade', 'blood', 'blow', 'blue', 'board', 'boat', 'body', 'bone', 'book', 'boot', 'boiling', 'bottle', 'box', 'boy', 'brain', 'brake', 'branch', 'brass', 'bread', 'breath', 'brick', 'bridge', 'bright', 'broken', 'brother', 'brown', 'brush', 'bucket', 'building', 'bulb', 'button', 'burn', 'burst', 'business', 'but', 'butter', 'by', 'ballet', 'Bang', 'bank', 'bar', 'beef', 'beer', 'Biology', 'bomb', 'balcony', 'bale', 'bankrupt', 'bark', 'barrel', 'beak', 'beaker', 'beard', 'beat', 'behind', 'belt', 'bet', 'bill', 'birefringence', 'blame', 'blanket', 'both', 'bottom', 'brave', 'break', 'breakfast', 'breast', 'broker', 'bubble', 'bud', 'budget', 'buoyancy', 'bunch', 'burial', 'busy', 'backbone', 'backwoods', 'become', 'became', 'bedroom', 'beeswax', 'birthday', 'birthright', 'blackberry', 'blackbird', 'blackboard', 'bloodvessel', 'bluebell', 'bookkeeper', 'brushwood', 'buttercup', 'basing', 'based', 'builder', 'burner', 'burned', 'burning', 'cake', 'camera', 'canvas', 'card', 'care', 'carriage', 'cart', 'cat', 'cause', 'certain', 'chain', 'chalk', 'chance', 'change', 'cheap', 'cheese', 'chemical', 'chest', 'chief', 'chin', 'church', 'circle', 'class', 'clean', 'clear', 'clock', 'cloth', 'cloud', 'coal', 'coat', 'cold', 'collar', 'color', 'comb', 'come', 'comfort', 'committee', 'community', 'common', 'company', 'comparison', 'competition', 'complete', 'complex', 'computer', 'condition', 'connection', 'conscious', 'control', 'cook', 'copper', 'copy', 'cord', 'cork', 'cotton', 'cough', 'country', 'cover', 'cow', 'crack', 'credit', 'crime', 'cruel', 'crush', 'cry', 'culture', 'cup', 'custom', 'current', 'curtain', 'curve', 'cushion', 'cut', 'cafe', 'calendar', 'catarrh', 'cent', 'centi-', 'champagne', 'chauffeur', 'chemist', 'Chemistry', 'check', 'chocolate', 'chorus', 'cigarette', 'circus', 'citron', 'club', 'coffee', 'cocktail', 'cognac', 'College', 'colony', 'calculation', 'call', 'came', 'capacity', 'capital', 'carpet', 'cartilage', 'case', 'cast', 'cave', 'cavity', 'cell', 'ceremony', 'certificate', 'chair', 'character', 'charge', 'child', 'chimney', 'china', 'choice', 'circulation', 'circuit', 'circumference', 'civilization', 'clay', 'claim', 'claw', 'cleavage', 'clever', 'client', 'climber', 'clip', 'code', 'coil', 'collision', 'collection', 'column', 'combination', 'combine', 'communications', 'complaint', 'component', 'compound', 'concept', 'concrete', 'conductor', 'congruent', 'conservation', 'consignment', 'constant', 'consumer', 'continuous', 'contour', 'convenient', 'conversion', 'cool', 'corner', 'correlation', 'corrosion', 'cost', 'court', 'creeper', 'crop', 'cross', 'cunning', 'cusp', 'customs', 'cardboard', 'carefree', 'caretaker', 'clockwork', 'commonsense', 'copyright', 'cupboard', 'carter', 'clothier', 'clothing', 'cooker', 'cooked', 'cooking', 'crying', 'damage', 'danger', 'dark', 'daughter', 'day', 'dead', 'dear', 'death', 'debt', 'decision', 'deep', 'degree', 'delicate', 'dependent', 'design', 'desire', 'destruction', 'detail', 'development', 'did', 'different', 'digestion', 'direction', 'dirty', 'discovery', 'discussion', 'disease', 'disgust', 'distance', 'distribution', 'division', 'do', 'does', 'dog', 'done', 'door', 'down', 'doubt', 'drain', 'drawer', 'dress', 'drink', 'driving', 'drop', 'dry', 'dust', 'dance', 'December', 'deci-', 'degree', 'dollar', 'Dominion', 'dynamite', 'damping', 'date', 'debit', 'deck', 'decrease', 'defect', 'deficiency', 'deflation', 'degenerate', 'delivery', 'demand', 'denominator', 'department', 'desert', 'density', 'deposit', 'determining', 'dew', 'diameter', 'difference', 'difficulty', 'drift', 'dike', 'dilution', 'dinner', 'dip', 'direct', 'disappearance', 'discharge', 'discount', 'disgrace', 'dislike', 'dissipation', 'disturbance', 'ditch', 'dive', 'divisor', 'divorce', 'doll', 'domesticating', 'dreadful', 'dream', 'duct', 'dull', 'duty', 'daylight', 'downfall', 'daily', 'dancer', 'dancing', 'designer', 'dressing', 'driver', 'dropped', 'dropper', 'duster', 'ear', 'early', 'earth', 'east', 'edge', 'education', 'effect', 'egg', 'elastic', 'electric', 'end', 'engine', 'enough', 'environment', 'equal', 'error', 'even', 'event', 'ever', 'every', 'example', 'exchange', 'existence', 'expansion', 'experience', 'expert', 'eye', 'eight', 'electricity', 'eleven', 'Embassy', 'Empire', 'encyclopedia', 'engineer', 'euro', 'each', 'easy', 'economy', 'efficiency', 'effort', 'either', 'elimination', 'employer', 'employment', 'empty', 'enemy', 'envelope', 'environment', 'envy', 'equation', 'erosion', 'eruption', 'evaporation', 'evening', 'exact', 'excitement', 'experiment', 'exercise', 'explanation', 'explosion', 'export', 'expression', 'extinction', 'eyebrow', 'eyelash', 'ear-ring', 'earthwork', 'evergreen', 'everybody', 'everyday', 'everyone', 'everything', 'everywhere', 'eyeball', 'face', 'fact', 'fall', 'false', 'family', 'far', 'farm', 'farther', 'fat', 'father', 'fear', 'feather', 'feeble', 'feeling', 'female', 'fertile', 'fiction', 'field', 'fight', 'finger', 'fire', 'first', 'fish', 'fixed', 'flag', 'flame', 'flat', 'flight', 'floor', 'flower', 'fly', 'fold', 'food', 'foolish', 'foot', 'for', 'force', 'fork', 'form', 'forward', 'fowl', 'frame', 'free', 'frequent', 'friend', 'from', 'front', 'fruit', 'full', 'further', 'future', 'February', 'fifteen', 'fifth', 'fifty', 'five', 'four', 'fourteen', 'fourth', 'forty', 'Friday', 'factor', 'failure', 'fair', 'famous', 'fan', 'fastening', 'fault', 'ferment', 'fertilizing', 'fever', 'fiber', 'figure', 'fin', 'financial', 'flash', 'flask', 'flesh', 'flood', 'flour', 'focus', 'forecast', 'forehead', 'foreign', 'forgiveness', 'fraction', 'fracture', 'fresh', 'friction', 'flint', 'flood', 'flow', 'foliation', 'frost', 'frozen', 'fume', 'funnel', 'funny', 'fur', 'furnace', 'furniture', 'fusion', 'fatherland', 'fingerprint', 'firearm', 'fire-engine', 'firefly', 'fireman', 'fireplace', 'firework', 'first-rate', 'football', 'footlights', 'footman', 'footnote', 'footprint', 'footstep', 'farmer', 'fisher', 'folder', 'fired', 'firing', 'gave', 'garden', 'general', 'get', 'girl', 'give', 'glass', 'glove', 'go', 'goat', 'goes', 'gold', 'gone', 'good', 'got', 'gat', 'government', 'grain', 'grass', 'great', 'green', 'grey/gray', 'grip', 'group', 'growth', 'guide', 'gun', 'gas', 'Geography', 'Geology', 'Geometry', 'gram', 'glycerin', 'gate', 'generation', 'germ', 'germinating', 'gill', 'glacier', 'gland', 'god', 'grand', 'grateful', 'grating', 'gravel', 'grease', 'grief', 'grocery', 'groove', 'gross', 'ground', 'guard', 'guarantee', 'guess', 'gum', 'gasworks', 'goldfish', 'goodlooking', 'good-morning', 'goodnight', 'gunboat', 'gun-carriage', 'gunmetal', 'gunpowder', 'gardener', 'had', 'hair', 'hammer', 'hand', 'hanging', 'happy', 'harbor', 'hard', 'harmony', 'has', 'hat', 'hate', 'hath', 'have', 'he', 'head', 'healthy', 'hearing', 'heart', 'heat', 'helicopter', 'help', 'her', 'here', 'heredity', 'high', 'him', 'history', 'hole', 'hollow', 'hook', 'hope', 'horn', 'horse', 'hospital', 'hour', 'house', 'how', 'humor', 'half', 'hiss', 'hotel', 'hundred', 'hyena', 'hygiene', 'hysteria', 'habit', 'handkerchief', 'handle', 'heavy', 'hedge', 'hill', 'hinge', 'hire', 'hold', 'holiday', 'home', 'honest', 'honey', 'hoof', 'host', 'human', 'hunt', 'hurry', 'hurt', 'husband', 'handbook', 'handwriting', 'headdress', 'headland', 'headstone', 'headway', 'hereafter', 'herewith', 'highlands', 'highway', 'himself', 'horseplay', 'horsepower', 'hourglass', 'houseboat', 'housekeeper', 'however', 'hanger', 'heater', 'heated', 'heating', 'I', 'ice', 'idea', 'if', 'ill', 'important', 'impulse', 'in', 'increase', 'industry', 'ink', 'insect', 'instrument', 'insurance', 'interest', 'invention', 'iron', 'is', 'island', 'it', 'its', 'Imperial', 'inch', 'inferno', 'influenza', 'international', 'igneous', 'image', 'imagination', 'import', 'impurity', 'incentive', 'inclusion', 'index', 'individual', 'inflation', 'infinity', 'inheritance', 'innocent', 'institution', 'insulator', 'integer', 'integration', 'intelligent', 'intercept', 'internet', 'interpretation', 'intersection', 'intrusion', 'investigation', 'investment', 'inverse', 'invitation', 'inasmuch', 'income', 'indoors', 'inland', 'inlet', 'input', 'inside', 'instep', 'into', 'itself', 'inner', 'jelly', 'jewel', 'join', 'journey', 'judge', 'jump', 'January', 'jazz', 'July', 'June', 'jam', 'jaw', 'jealous', 'jerk', 'joint', 'jug', 'juice', 'jury', 'justice', 'jeweler', 'joiner', 'keep', 'kept', 'kettle', 'key', 'kick', 'kind', 'kiss', 'knee', 'knife', 'knot', 'knowledge', 'kilo', 'King', 'kennel', 'kidney', 'kitchen', 'knock', 'keeper', 'land', 'language', 'last', 'late', 'laugh', 'law', 'lead', 'leaf', 'learning', 'least', 'leather', 'leg', 'left', 'less', 'let', 'letter', 'level', 'library', 'lift', 'light', 'like', 'limit', 'line', 'linen', 'lip', 'liquid', 'list', 'little', 'living', 'lock', 'long', 'loose', 'loss', 'loud', 'love', 'low', 'latitude', 'lava', 'liter', 'liqueur', 'longitude', 'lace', 'lag', 'lake', 'lame', 'lamp', 'large', 'latitude', 'lawyer', 'layer', 'lazy', 'lecture', 'legal', 'length', 'lens', 'lesson', 'lever', 'lever', 'liability', 'license', 'lid', 'life', 'lime', 'limestone', 'link', 'liver', 'load', 'local', 'load', 'loan', 'locus', 'look', 'longitude', 'luck', 'lump', 'lunch', 'lung', 'landmark', 'landslip', 'lighthouse', 'looking-glass', 'laughing', 'learner', 'likely', 'locker', 'locking', 'machine', 'made', 'man', 'manager', 'make', 'male', 'map', 'mark', 'market', 'married', 'match', 'material', 'mass', 'may', 'me', 'meal', 'measure', 'meat', 'medical', 'meeting', 'memory', 'metal', 'middle', 'might', 'military', 'milk', 'mind', 'mine', 'minute', 'mist', 'mixed', 'money', 'monkey', 'month', 'moon', 'more', 'morning', 'most', 'mother', 'motion', 'mountain', 'mouth', 'move', 'much', 'muscle', 'music', 'my', '', 'macaroni', 'madam', 'magnetic', 'malaria', 'mania', 'March', 'Mathematics', 'May', 'meter', 'meow', 'micro-', 'microscope', 'mile', 'milli-', 'million', 'minute', 'Monday', 'Museum', 'magic', 'magnitude', 'manner', 'many', 'marble', 'margin', 'marriage', 'mast', 'mattress', 'mature', 'mean', 'meaning', 'medicine', 'medium', 'melt', 'member', 'mess', 'message', 'metabolism', 'mill', 'mineral', 'mixture', 'model', 'modern', 'modest', 'momentum', 'monopoly', 'mood', 'moral', 'moustache', 'mud', 'multiple', 'multiplication', 'murder', 'manhole', 'maybe', 'myself', 'marked', 'miner', 'nail', 'name', 'narrow', 'nation', 'natural', 'near', 'necessary', 'neck', 'need', 'needle', 'nerve', 'net', 'never', 'new', 'news', 'night', 'no', 'noise', 'normal', 'north', 'nose', 'not', 'note', 'now', 'number', 'nut', 'neutron', 'nickel', 'nicotine', 'nine', 'November', 'nasty', 'nature', 'navy', 'neat', 'neglect', 'neighbor', 'nest', 'next', 'nice', 'node', 'nostril', 'nuclear', 'nucleus', 'numerator', 'nurse', 'network', 'newspaper', 'nobody', 'nothing', 'nowhere', 'nearer', 'noted', 'observation', 'of', 'off', 'offer', 'office', 'oil', 'old', 'on', 'one', 'only', 'open', 'operation', 'opinion', 'opposite', 'or', 'orange', 'order', 'organization', 'ornament', 'other', 'our', 'out', 'oven', 'over', 'owner', 'October', 'olive', 'once', 'omelet', 'one', 'opera', 'opium', 'orchestra', 'organism', 'obedient', 'officer', 'orchestra', 'ore', 'organ', 'origin', 'outcrop', 'outlier', 'overlap', 'oval', 'own', 'oxidation', 'offspring', 'oncoming', 'oneself', 'onlooker', 'onto', 'outburst', 'outcome', 'outcry', 'outdoor', 'outgoing', 'outhouse', 'outlaw', 'outlet', 'outline', 'outlook', 'output', 'outside', 'outskirts', 'outstretched', 'overacting', 'overalloverbalancing', 'overbearing', 'overcoat', 'overcome', 'overdo', 'overdressed', 'overfull', 'overhanging', 'overhead', 'overland', 'overleaf', 'overloud', 'overseas', 'overseer', 'overshoe', 'overstatement', 'overtake', 'overtaxed', 'overtimeoverturned', 'overuse', 'overvalued', 'overweight', 'overworking', 'outer', 'page', 'pain', 'paint', 'paper', 'parallel', 'parcel', 'part', 'past', 'paste', 'payment', 'peace', 'pen', 'pencil', 'person', 'physical', 'picture', 'pig', 'pin', 'pipe', 'place', 'plane', 'plant', 'plate', 'play', 'please', 'pleasure', 'plough/plow', 'pocket', 'point', 'poison', 'polish', 'political', 'poor', 'porter', 'position', 'possible', 'pot', 'potato', 'powder', 'power', 'present', 'price', 'print', 'prison', 'private', 'probable', 'process', 'produce', 'profit', 'property', 'prose', 'protest', 'public', 'pull', 'pump', 'punishment', 'purpose', 'push', 'put', 'pajamas', 'paraffin', 'paradise', 'park', 'passport', 'patent', 'pence', 'penny', 'penguin', 'petroleum', 'phonograph', 'Physics', 'Physiology', 'piano', 'platinum', 'police', 'post', 'potash', 'pound', 'President', 'Prince', 'Princess', 'program', 'propaganda', 'Psychology', 'Purr', 'pyramid', 'packing', 'pad', 'pair', 'pan', 'paragraph', 'parent', 'particle', 'partner', 'party', 'passage', 'path', 'patience', 'pedal', 'pendulum', 'pension', 'people', 'perfect', 'petal', 'piston', 'plain', 'plan', 'plaster', 'plug', 'poetry', 'pollen', 'pool', 'population', 'porcelain', 'practice', 'praise', 'prayer', 'pressure', 'prick', 'priest', 'prime', 'probability', 'product', 'progress', 'projectile', 'projection', 'promise', 'proof', 'proud', 'pulley', 'pupil', 'purchase', 'pure', 'pincushion', 'plaything', 'policeman', 'postman', 'postmark', 'postmaster', 'postoffice', 'painter', 'painting', 'parting', 'playing', 'played', 'pleased', 'pointer', 'pointing', 'potter', 'printer', 'prisoner', 'producer', 'quality', 'question', 'quick', 'quiet', 'quite', 'Quack', 'quarter', 'Queen', 'quinine', 'quantity', 'quotient', 'rail', 'rain', 'range', 'rat', 'rate', 'ray', 'reaction', 'red', 'reading', 'ready', 'reason', 'receipt', 'record', 'regret', 'regular', 'relation', 'religion', 'representative', 'request', 'respect', 'responsible', 'rest', 'reward', 'rhythm', 'rice', 'right', 'ring', 'river', 'road', 'rod', 'roll', 'roof', 'room', 'root', 'rough', 'round', 'rub', 'rule', 'run', 'radio', 'radium', 'referendum', 'restaurant', 'rheumatism', 'Royal', 'rum', 'race', 'radiation', 'ratio', 'reagent', 'real', 'receiver', 'reciprocal', 'rectangle', 'recurring', 'reference', 'reflux', 'reinforcement', 'relative', 'remark', 'remedy', 'rent', 'repair', 'reproduction', 'repulsion', 'resistance', 'residue', 'resolution', 'result', 'retail', 'revenge', 'reversible', 'rich', 'rigidity', 'rise', 'rival', 'rock', 'rot', 'rotation', 'rude', 'rust', 'reasonable', 'runaway', 'raining', 'reader', 'reading', 'roller', 'ruler', 'rubber', 'sad', 'said', 'safe', 'sail', 'salt', 'same', 'sand', 'saw', 'say', 'scale', 'school', 'science', 'scissors', 'screw', 'sea', 'seat', 'second', 'secret', 'secretary', 'see', 'seed', 'seenseem', 'selection', 'self', 'send', 'sense', 'sent', 'separate', 'serious', 'servant', 'sex', 'shade', 'shake', 'shame', 'sharp', 'she', 'sheep', 'shelf', 'ship', 'shirt', 'shock', 'shoe', 'short', 'shut', 'side', 'sign', 'silk', 'silver', 'simple', 'sister', 'size', 'skin', 'skirt', 'sky', 'sleep', 'slip', 'slope', 'slow', 'small', 'smash', 'smell', 'smile', 'smoke', 'smooth', 'snake', 'sneeze', 'snow', 'so', 'soap', 'society', 'sock', 'soft', 'solid', 'some', 'son', 'song', 'sort', 'sound', 'soup', 'south', 'space', 'spade', 'special', 'sponge', 'spoon', 'spring', 'square', 'stage', 'standard', 'stamp', 'star', 'start', 'statement', 'station', 'steam', 'steel', 'stem', 'step', 'stick', 'sticky', 'stiff', 'still', 'stitch', 'stocking', 'stomach', 'stone', 'stop', 'store', 'story', 'straight', 'strange', 'street', 'strong', 'structure', 'substance', 'such', 'sudden', 'sugar', 'suggestion', 'summer', 'sun', 'support', 'surprise', 'sweet', 'swim', 'system', 'salad', 'sardine', 'Saturday', 'second', 'September', 'serum', 'seven', 'sir', 'six', 'sixteen', 'sport', 'Sunday', 'sac', 'sale', 'sample', 'satisfaction', 'saturated', 'saucer', 'saving', 'scale', 'scarp', 'schist', 'scratch', 'screen', 'seal', 'search', 'security', 'secretion', 'section', 'sedimentary', 'selfish', 'sensitivity', 'sentence', 'sepal', 'service', 'set', 'shadow', 'shale', 'share', 'shave', 'shear', 'sheet', 'shell', 'shore', 'shoulder', 'show', 'sight', 'sill', 'similarity', 'since', 'skull', 'slate', 'sleeve', 'slide', 'social', 'soil', 'soldier', 'solution', 'solvent', 'sorry', 'spark', 'specialization', 'specimen', 'speculation', 'spirit', 'spit', 'splash', 'spot', 'stable', 'stain', 'stair', 'stalk', 'stamen', 'statistics', 'steady', 'stimulus', 'storm', 'strain', 'straw', 'stream', 'strength', 'stress', 'strike', 'string', 'study', 'subject', 'substitution', 'subtraction', 'success', 'successive', 'sucker', 'sum', 'supply', 'surface', 'surgeon', 'suspension', 'suspicious', 'swelling', 'swing', 'switch', 'sympathetic', 'seaman', 'secondhand', 'shorthand', 'sideboard', 'sidewalk', 'somebody', 'someday', 'somehow', 'someone', 'something', 'sometime', 'somewhat', 'somewhere', 'suchlike', 'sunburn', 'sunlight', 'sunshade', 'sweetheart', 'sailor', 'shocking', 'shocked', 'snowing', 'steamer', 'stopper', 'stopping', 'stretcher', 'table', 'tail', 'take', 'talk', 'tall', 'taste', 'tax', 'teaching', 'technology', 'tendency', 'test', 'than', 'that', 'the', 'their', 'them', 'then', 'theory', 'there', 'these', 'they', 'thick', 'thin', 'thing', 'this', 'those', 'though', 'thought', 'thread', 'throat', 'through', 'thumb', 'thunder', 'ticket', 'tight', 'tired', 'till', 'time', 'tin', 'to', 'toe', 'together', 'tomorrow', 'tongue', 'took', 'tooth', 'top', 'touch', 'town', 'trade', 'train', 'transport', 'tray', 'tree', 'trick', 'trousers', 'true', 'trouble', 'turn', 'twist', 'tapioca', 'taxi', 'tea', 'telegram', 'telephone', 'television', 'ten', 'terrace', 'theater', 'thermometer', 'third', 'thirteen', 'thirty', 'thousand', 'three', 'Thursday', 'toast', 'tobacco', 'torpedo', 'Tuesday', 'turbine', 'twenty-one', 'twelve', 'twenty', 'twice', 'two', 'tailor', 'tame', 'tap', 'tear', 'tent', 'term', 'texture', 'thickness', 'thief', 'thimble', 'thorax', 'threat', 'thrust', 'tide', 'tie', 'tissue', 'tongs', 'too', 'total', 'towel', 'tower', 'traffic', 'tragedy', 'transmission', 'transparent', 'trap', 'travel', 'treatment', 'triangle', 'truck', 'tube', 'tune', 'tunnel', 'twin', 'typist', 'today', 'tonight', 'tradesman', 'talking', 'teacher', 'touching', 'trader', 'trainer', 'training', 'troubling', 'troubled', 'turning', 'umbrella', 'under', 'unit', 'up', 'us', 'use', 'university', 'ugly', 'unconformity', 'understanding', 'universe', 'unknown', 'underclothing', 'undercooked', 'undergo', 'undergrowth', 'undermined', 'undersigned', 'undersized', 'understatement', 'undertake', 'undervalued', 'undo', 'upkeep', 'uplift', 'upon', 'upright', 'uproot', 'uptake', 'used', 'value', 'verse', 'very', 'vessel', 'view', 'violent', 'voice', 'vanilla', 'violin', 'visa', 'vitamin', 'vodka', 'volt', 'valency', 'valley', 'valve', 'vapor', 'variable', 'vascular', 'vegetable', 'velocity', 'vestigial', 'victim', 'victory', 'volume', 'vortex', 'vote', 'viewpoint', 'walk', 'wall', 'waiting', 'war', 'warm', 'was', 'wash', 'waste', 'watch', 'water', 'wave', 'wax', 'way', 'we', 'weather', 'week', 'weight', 'well', 'went', 'were', 'west', 'wet', 'what', 'wheel', 'when', 'where', 'which', 'while', 'whip', 'whistle', 'white', 'who', 'whom', 'whose', 'why', 'wide', 'will', 'wind', 'window', 'wine', 'wing', 'winter', 'wire', 'wise', 'with', 'woman', 'wood', 'wool', 'word', 'work', 'worm', 'would', 'wound', 'writing', 'wrong', 'Wednesday', 'whisky', 'weak', 'wedge', 'welcome', 'whether', 'wholesale', 'widow', 'wife', 'wild', 'world', 'wreck', 'wrist', 'waterfall', 'weekend', 'well-being', 'well-off', 'whatever', 'whenever', 'whereas', 'whereby', 'wherever', 'whichever', 'whitewash', 'whoever', 'windpipe', 'within', 'without', 'woodwork', 'workhouse', 'waiter', 'worker', 'working', 'out', 'up', 'writer', 'waiting', 'wasted', 'your', 'yours', 'year', 'yellow', 'yes', 'yesterday', 'you', 'young', 'zebra', 'zinc', 'Zoology', 'yawn', 'x-ray', 'yearbook', 'yourself', 'zookeeper'];



function getRandomIndex() {
    return Math.floor(Math.random() * words.length)
}


function getPassword(length) {
    var password = [];
    for (i=0; i<length; i++) {
        var candidate = words[getRandomIndex()]
        console.log(candidate);
        if (candidate.length > 3 && ! candidate.endsWith("-") && password.indexOf(candidate) === -1){
            console.log("accepting!")
            password.push(candidate);
        }
        else {
            console.log("rejecting!");
            i--;
        }

    }
    return password.join('-');
}

function displayPassword() {
    var pw = getPassword(4);
    document.getElementById("password").innerHTML = pw;
}

console.log(getPassword(4));
