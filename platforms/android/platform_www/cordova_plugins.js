cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.file/www/DirectoryEntry.js",
        "id": "org.apache.cordova.file.DirectoryEntry",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.DirectoryEntry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/DirectoryReader.js",
        "id": "org.apache.cordova.file.DirectoryReader",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.DirectoryReader"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/Entry.js",
        "id": "org.apache.cordova.file.Entry",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.Entry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/File.js",
        "id": "org.apache.cordova.file.File",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.File"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileEntry.js",
        "id": "org.apache.cordova.file.FileEntry",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.FileEntry"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileError.js",
        "id": "org.apache.cordova.file.FileError",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.FileError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileReader.js",
        "id": "org.apache.cordova.file.FileReader",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.FileReader"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileSystem.js",
        "id": "org.apache.cordova.file.FileSystem",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.FileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileUploadOptions.js",
        "id": "org.apache.cordova.file.FileUploadOptions",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.FileUploadOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileUploadResult.js",
        "id": "org.apache.cordova.file.FileUploadResult",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.FileUploadResult"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/FileWriter.js",
        "id": "org.apache.cordova.file.FileWriter",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.FileWriter"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/Flags.js",
        "id": "org.apache.cordova.file.Flags",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.Flags"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/LocalFileSystem.js",
        "id": "org.apache.cordova.file.LocalFileSystem",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.LocalFileSystem"
        ],
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/Metadata.js",
        "id": "org.apache.cordova.file.Metadata",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.Metadata"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/ProgressEvent.js",
        "id": "org.apache.cordova.file.ProgressEvent",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.ProgressEvent"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/fileSystems.js",
        "id": "org.apache.cordova.file.fileSystems",
        "pluginId": "org.apache.cordova.file"
    },
    {
        "file": "plugins/org.apache.cordova.file/www/requestFileSystem.js",
        "id": "org.apache.cordova.file.requestFileSystem",
        "pluginId": "org.apache.cordova.file",
        "clobbers": [
            "window.requestFileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/resolveLocalFileSystemURI.js",
        "id": "org.apache.cordova.file.resolveLocalFileSystemURI",
        "pluginId": "org.apache.cordova.file",
        "merges": [
            "window"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/android/FileSystem.js",
        "id": "org.apache.cordova.file.androidFileSystem",
        "pluginId": "org.apache.cordova.file",
        "merges": [
            "FileSystem"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.file/www/fileSystems-roots.js",
        "id": "org.apache.cordova.file.fileSystems-roots",
        "pluginId": "org.apache.cordova.file",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.file/www/fileSystemPaths.js",
        "id": "org.apache.cordova.file.fileSystemPaths",
        "pluginId": "org.apache.cordova.file",
        "merges": [
            "cordova"
        ],
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/CaptureAudioOptions.js",
        "id": "org.apache.cordova.media-capture.CaptureAudioOptions",
        "pluginId": "org.apache.cordova.media-capture",
        "clobbers": [
            "CaptureAudioOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/CaptureImageOptions.js",
        "id": "org.apache.cordova.media-capture.CaptureImageOptions",
        "pluginId": "org.apache.cordova.media-capture",
        "clobbers": [
            "CaptureImageOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/CaptureVideoOptions.js",
        "id": "org.apache.cordova.media-capture.CaptureVideoOptions",
        "pluginId": "org.apache.cordova.media-capture",
        "clobbers": [
            "CaptureVideoOptions"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/CaptureError.js",
        "id": "org.apache.cordova.media-capture.CaptureError",
        "pluginId": "org.apache.cordova.media-capture",
        "clobbers": [
            "CaptureError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/MediaFileData.js",
        "id": "org.apache.cordova.media-capture.MediaFileData",
        "pluginId": "org.apache.cordova.media-capture",
        "clobbers": [
            "MediaFileData"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/MediaFile.js",
        "id": "org.apache.cordova.media-capture.MediaFile",
        "pluginId": "org.apache.cordova.media-capture",
        "clobbers": [
            "MediaFile"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.media-capture/www/capture.js",
        "id": "org.apache.cordova.media-capture.capture",
        "pluginId": "org.apache.cordova.media-capture",
        "clobbers": [
            "navigator.device.capture"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.file": "1.3.3",
    "org.apache.cordova.media-capture": "0.3.6"
}
// BOTTOM OF METADATA
});