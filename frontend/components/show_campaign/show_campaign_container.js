import { connect } from "react-redux"
import ShowCampaign from "./show_campaign"
import { fetchCampaigns, fetchCampaign, deleteCampaign } from '../../actions/campaign_action';
import {openModal} from '../../actions/modal_action'
import { selectCampaignsFromUser, selectFollowId, selectRewardsFromCampaignId, selectCampaignFollows } from '../../reducers/selectors'
import { fetchFollows, createFollow, deleteFollow} from '../../actions/follow_actions'
import { fetchRewards } from '../../actions/reward_actions'
import { fetchUsers } from '../../actions/session_actions'



const mSTP = (state, ownProps) => {
    const rewards = selectRewardsFromCampaignId(state.entities.rewards, parseInt(ownProps.match.params.campaignId))
    const userId = state.entities.users[state.session.id];
    const campFollows = selectCampaignFollows(state.entities.follows, parseInt(ownProps.match.params.campaignId))
    let camps;
    let followId;
    if(userId) {
        camps = selectCampaignsFromUser(state.entities.campaigns, userId.id) 
        followId = selectFollowId(state.entities.follows, userId.id, parseInt(ownProps.match.params.campaignId))
    }
    return {
        campaign: state.entities.campaigns[ownProps.match.params.campaignId],
        userCampaigns: camps || [],
        currentUser: userId,
        userFollowId: followId || [],
        allFollows: state.entities.follows,
        campRewards: rewards,
        allUsers: state.entities.users,
        campaignFollows: campFollows
    }
}

const mDTP = dispatch => ({
    fetchCampaign: campaignId => dispatch(fetchCampaign(campaignId)),
    deleteCampaign: campaignId => dispatch(deleteCampaign(campaignId)),
    openModal: modal => dispatch(openModal(modal)),
    fetchCampaigns: () => dispatch(fetchCampaigns()),
    fetchFollows: () => dispatch(fetchFollows()),
    createFollow: follow => dispatch(createFollow(follow)),
    deleteFollow: followId => dispatch(deleteFollow(followId)),
    fetchRewards: () => dispatch(fetchRewards()),
    fetchUsers: () => dispatch(fetchUsers())

});

export default connect(mSTP, mDTP)(ShowCampaign)