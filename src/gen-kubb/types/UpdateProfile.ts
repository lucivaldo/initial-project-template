import type { Profile } from "./Profile";
import type { ProfileUpdate } from "./ProfileUpdate";

 /**
 * @description Profile updated successfully
*/
export type UpdateProfile200 = Profile;
export type UpdateProfileMutationRequest = ProfileUpdate;
/**
 * @description Profile updated successfully
*/
export type UpdateProfileMutationResponse = Profile;
export type UpdateProfileMutation = {
    Response: UpdateProfileMutationResponse;
    Request: UpdateProfileMutationRequest;
};