initSidebarItems({"enum":[["CompareResult","Indicates whether a comparison was successful, an error, or if more data was needed"],["Err","The `Err` enum indicates the parser was not successful"],["Needed","Contains information on needed data if a parser returned `Incomplete`"]],"macro":[["error_node_position","Creates a parse error from a `nom::ErrorKind`, the position in the input and the next error in the parsing tree"],["error_position","Creates a parse error from a `nom::ErrorKind` and the position in the input"]],"mod":[["bits","Bit level parsers"],["branch","Choice combinators"],["bytes","Parsers recognizing bytes streams"],["character","Character specific parsers and combinators"],["combinator","General purpose combinators"],["error","Error management"],["lib","Lib module to re-export everything needed from `std` or `core`/`alloc`. This is how `serde` does it, albeit there it is not public."],["multi","Combinators applying their child parser multiple times"],["number","Parsers recognizing numbers"],["sequence","Combinators applying parsers in sequence"]],"struct":[["And","Implementation of `Parser::and`"],["AndThen","Implementation of `Parser::and_then`"],["FlatMap","Implementation of `Parser::flat_map`"],["Into","Implementation of `Parser::into`"],["Map","Implementation of `Parser::map`"],["Or","Implementation of `Parser::or`"]],"trait":[["AsBytes","Helper trait for types that can be viewed as a byte slice"],["AsChar","Transforms common types to a char for basic token parsing"],["Compare","Abstracts comparison operations"],["ErrorConvert","Equivalent From implementation to avoid orphan rules in bits parsers"],["ExtendInto","Abstracts something which can extend an `Extend`. Used to build modified input slices in `escaped_transform`"],["FindSubstring","Look for a substring in self"],["FindToken","Look for a token in self"],["Finish","Helper trait to convert a parser’s result to a more manageable type"],["HexDisplay","Helper trait to show a byte slice as a hex dump"],["InputIter","Abstracts common iteration operations on the input type"],["InputLength","Abstract method to calculate the input length"],["InputTake","Abstracts slicing operations"],["InputTakeAtPosition","Methods to take as much input as possible until the provided function returns true for the current element."],["Offset","Useful functions to calculate the offset between slices and show a hexdump of a slice"],["ParseTo","Used to integrate `str`’s `parse()` method"],["Parser","All nom parsers implement this trait"],["Slice","Slicing operations using ranges."],["ToUsize","Helper trait to convert numbers to usize."],["UnspecializedInput","Dummy trait used for default implementations (currently only used for `InputTakeAtPosition` and `Compare`)."]],"type":[["IResult","Holds the result of parsing functions"]]});