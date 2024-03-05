```ts
abstract class View extends Component

abstract class ItemView extends View
class SearchView extends View
class FileExplorerView extends View
class TagView extends View

class EmptyView extends ItemView
class FileView extends ItemView
class ReleaseNotesView extends ItemView
class GraphView extends ItemView
class BrowserHistoryView extends ItemView
class BookmarksView extends ItemView
class AllPropertiesView extends ItemView

class CustomView extends EmptyView

class EditableFileView extends FileView
class OU extends FileView

class AudioFileView extends EditableFileView
class ImageFileView extends EditableFileView
class PdfFileView extends EditableFileView
class VideoFileView extends EditableFileView
class TextFileView extends EditableFileView

class LocalGraphView extends OU
class BackLinkView extends OU
class OutgoingLinkView extends OU
class OutlineView extends OU
class FilePropertiesView extends OU

class MarkdownView extends TextFileView
class CanvasView extends TextFileView
```