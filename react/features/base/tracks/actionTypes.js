/**
 * The type of redux action dispatched when a track has been (locally or
 * remotely) added to the conference.
 *
 * {
 *     type: TRACK_ADDED,
 *     track: Track
 * }
 */
export const TRACK_ADDED = Symbol('TRACK_ADDED');

/**
 * The type of redux action dispatched when a canceled {@code getUserMedia}
 * process completes either successfully or with an error (the error is ignored
 * and the track is immediately disposed if it has been created).
 *
 * {
 *     type: TRACK_CREATE_CANCELED,
 *     trackType: MEDIA_TYPE
 * }
 */
export const TRACK_CREATE_CANCELED = Symbol('TRACK_CREATE_CANCELED');

/**
 * The type of redux action dispatched when {@code getUserMedia} fails with an
 * error (such as permission denied).
 *
 * {
 *     type: TRACK_CREATE_ERROR,
 *     permissionDenied: Boolean,
 *     trackType: MEDIA_TYPE
 * }
 */
export const TRACK_CREATE_ERROR = Symbol('TRACK_CREATE_ERROR');

/**
 * The type of redux action dispatched when a track has been (locally or
 * remotely) removed from the conference.
 *
 * {
 *     type: TRACK_REMOVED,
 *     track: Track
 * }
 */
export const TRACK_REMOVED = Symbol('TRACK_REMOVED');

/**
 * The type of redux action dispatched when a track's properties were updated.
 *
 * {
 *     type: TRACK_UPDATED,
 *     track: Track
 * }
 */
export const TRACK_UPDATED = Symbol('TRACK_UPDATED');

/**
 * The type of redux action dispatched when a local track starts being created
 * via a WebRTC {@code getUserMedia} call. The action's payload includes an
 * extra {@code gumProcess} property which is a {@code Promise} with an extra
 * {@code cancel} method which can be used to cancel the process. Canceling will
 * result in disposing any {@code JitsiLocalTrack} returned by the
 * {@code getUserMedia} callback. There will be a {@code TRACK_CREATE_CANCELED}
 * action instead of a {@code TRACK_ADDED} or {@code TRACK_CREATE_ERROR} action.
 *
 * {
 *     type: TRACK_WILL_CREATE
 *     track: {
 *         gumProcess: Promise with a `cancel` method to cancel the process,
 *         local: true,
 *         mediaType: MEDIA_TYPE
 *     }
 * }
 */
export const TRACK_WILL_CREATE = Symbol('TRACK_WILL_CREATE');
